import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { signUp } = useAuth();

  const handleRegister = async () => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      setSuccess(null);
      return;
    }

    const result = await signUp(email, password);

    if (result === "success") {
      setSuccess("Account created successfully!");
      setError(null);
    } else {
      setError(result ?? "Unknown error");
      setSuccess(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.createAccount}>Create Account</Text>
      <TextInput
        placeholder="Enter new email ..."
        placeholderTextColor="white"
        style={styles.emailInput}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter new password ..."
        secureTextEntry
        placeholderTextColor="white"
        style={styles.passwordInput}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Repeat Password ..."
        secureTextEntry
        placeholderTextColor="white"
        style={styles.repeatPasswordInput}
        onChangeText={(text) => setRepeatedPassword(text)}
      />

      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
      </Pressable>
      {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}
      {success && (
        <Text style={{ color: "green", marginTop: 10 }}>{success}</Text>
      )}
      <View>
        <Text style={styles.havingAccountText} onPress={() => router.back()}>
          I already have an account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#410f5aff",
    paddingTop: 100,
  },
  createAccount: {
    marginBottom: 40,
    fontSize: 30,
    color: "white",
  },
  emailInput: {
    borderBottomColor: "white",
    borderColor: "white",
    borderBottomWidth: 0.7,
    width: 340,
    height: 45,
    marginBottom: 15,
    paddingLeft: 10,
  },
  passwordInput: {
    borderBottomWidth: 0.7,
    borderBottomColor: "white",
    borderColor: "white",
    width: 340,
    height: 45,
    marginBottom: 15,
    paddingLeft: 10,
  },
  repeatPasswordInput: {
    borderBottomWidth: 0.7,
    borderBottomColor: "white",
    borderColor: "white",
    width: 340,
    height: 45,
    marginBottom: 45,
    paddingLeft: 10,
  },
  registerButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: 340,
    height: 55,
    marginBottom: 250,
  },
  registerText: {
    color: "#410f5aff",
    fontWeight: "bold",
    fontSize: 17,
  },
  havingAccountText: {
    color: "white",
  },
});
