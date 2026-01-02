import { useContext } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CalculateBalanceContext } from "../context/BalanceContext";

type SendModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedService: null | "send" | "receive" | "topup" | "payment";
};

export default function SendModal({
  visible,
  onClose,
  selectedService,
}: SendModalProps) {
  const handleInput = () => {
    setUserInput("");
  };

  const context = useContext(CalculateBalanceContext);

  if (!context) {
    throw new Error('Please fill correctly')
  }

  const {
    currentBalance,
    userInput,
    setUserInput,
    convertUserInputToNumber,
    formattedcurrBal,
  } = context;

  const newValue = Number(userInput);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {selectedService === "send" && (
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
                Current Balance: {formattedcurrBal}.00$
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  marginBottom: 30,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    paddingTop: 5,
                    width: 60,
                  }}
                >
                  IBAN:
                </Text>
                <TextInput
                  placeholder="GMB00342123MB123"
                  placeholderTextColor="grey"
                  style={styles.input}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
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
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              marginLeft: 170,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onClose();
                handleInput();
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  marginRight: -10,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>

            {currentBalance < newValue ? (
              <TouchableOpacity
                onPress={() => {
                  alert("Insufficient amount of money!");
                  onClose();
                  handleInput();
                }}
              >
                <Text
                  style={{
                    color: "#b9bbb9ff",
                    fontSize: 20,
                    marginHorizontal: 20,
                  }}
                >
                  Send
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  alert("Transaction Completed!");
                  onClose();
                  handleInput();
                  convertUserInputToNumber();
                }}
              >
                <Text
                  style={{
                    color: "#43e643ff",
                    fontSize: 20,
                    marginHorizontal: 20,
                  }}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
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



