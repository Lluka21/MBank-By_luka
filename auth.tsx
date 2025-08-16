import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Auth() {
  const router = useRouter();

  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async () => {
    const result = await signIn(email, password);

    if (result === "success") {
      router.push("/(tabs)/card");
    } else {
      Alert.alert("Sign In Error", result || "Something went wrong");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.helloText}>MBank</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="purple"
          style={styles.userNameInput}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="purple"
          style={styles.passwordInput}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <Pressable style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>

        {!handleSignIn ? <Text>Please fill in all field!</Text> : null}

        <Text style={styles.registerText}>Not a member yet?</Text>
        <Pressable
          style={styles.signUpButton}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  helloText: {
    fontSize: 30,
    marginBottom: 50,
    color: "purple",
  },
  userNameInput: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 20,
    width: 340,
    height: 55,
    marginBottom: 20,
    paddingLeft: 20,
    color: "black",
  },

  passwordInput: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 20,
    width: 340,
    height: 55,
    marginBottom: 50,
    paddingLeft: 20,
  },
  signInButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    padding: 10,
    backgroundColor: "purple",
    color: "white",
    borderRadius: 20,
    width: 340,
    height: 55,
    marginBottom: 250,
  },
  signInText: {
    color: "white",
    fontSize: 17,
  },
  registerText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#8322b4ff",
    fontWeight: "bold",
  },
  signUpButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    padding: 10,
    backgroundColor: "#b082c7ff",
    color: "white",
    borderRadius: 20,
    width: 340,
    height: 55,
    marginBottom: 250,
  },
  signUpText: {
    color: "white",
    fontSize: 17,
  },
});
