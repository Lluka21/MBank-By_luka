import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type SendModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedService: null | "send" | "receive" | "topup" | "payment";
};

const bankCards = ["Visa Platinum", "MasterCard Gold"];

export default function SendModal({
  visible,
  onClose,
  selectedService,
}: SendModalProps) {
  const [userInput, setUserInput] = useState<string>("");
  const [currentCart, setCurrentCart] = useState("Visa Platinum");
  const handleInput = () => {
    setUserInput("");
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {selectedService === "topup" && (
            <View>
              <Text
                style={{
                  color: "white",
                  marginBottom: 30,
                  fontSize: 20,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Send Top-up
              </Text>

              <View
                style={{
                  flexDirection: "column",
                  marginBottom: 30,
                  padding: 10,
                  backgroundColor: "#3c293fff",
                  borderRadius: 10,
                  width: 320,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Recipient's phone number:
                  </Text>
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    Edit
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                  }}
                >
                  📞 + 27612345678951
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    paddingTop: 5,
                    marginBottom: 20,
                  }}
                >
                  Choose your cart:
                </Text>

                <View style={{ flexDirection: "column" }}>
                  {bankCards.map((b, i) => (
                    <TouchableOpacity
                      key={i}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: 320,
                        marginBottom: 15,
                      }}
                      onPress={() => setCurrentCart(b)}
                    >
                      {currentCart === b ? (
                        <View
                          style={{
                            backgroundColor: "#1591d8ff",
                            marginRight: 10,
                            padding: 3,
                            borderRadius: 10,
                            height: 10,
                            width: 10,
                          }}
                        ></View>
                      ) : (
                        <View
                          style={{
                            backgroundColor: "#ffff",
                            marginRight: 10,
                            padding: 3,
                            borderRadius: 10,
                            height: 10,
                            width: 10,
                          }}
                        ></View>
                      )}

                      {b === "Visa Platinum" ? (
                        <View
                          style={{
                            padding: 8,
                            width: 40,
                            backgroundColor: "#027DFF",
                            borderRadius: 5,
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 6,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            Visa
                          </Text>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {b === "MasterCard Gold" ? (
                        <View
                          style={{
                            padding: 8,
                            width: 40,
                            height: 24,
                            backgroundColor: "#c0b519ff",
                            borderRadius: 4,
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 5,
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            MC Gold
                          </Text>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {b}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    paddingTop: 5,
                    width: 60,
                  }}
                >
                  Amount:
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholderTextColor="white"
                  style={styles.input}
                  value={userInput}
                  onChangeText={setUserInput}
                />
              </View>
            </View>
          )}
          <View
            style={{
              flexDirection: "column",
              gap: 20,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onClose}>
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 20,
                  width: 300,
                  height: 50,
                  textAlign: "center",
                  padding: 10,
                  backgroundColor: "hsla(2, 58%, 50%, 1.00)",
                  borderRadius: 20,
                  paddingTop: 12,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                alert("Transaction Completed!");
                onClose();
                handleInput();
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 20,
                  marginHorizontal: 20,
                  width: 300,
                  height: 50,
                  textAlign: "center",
                  padding: 10,
                  backgroundColor: "hsla(115, 34%, 52%, 1.00)",
                  borderRadius: 20,
                  paddingTop: 12,
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    flexDirection: "column",
    backgroundColor: "#1c0120",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#3f2e4dff",
    borderRadius: 12,
    width: 230,
    height: 40,
    color: "white",
    paddingLeft: 10,
    fontStyle: "italic",
  },
});

