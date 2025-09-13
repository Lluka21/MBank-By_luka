import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SendModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedService: null | "send" | "receive" | "topup" | "payment";
};

export default function SendModal({
  visibl,
  onClose,
  selectedService,
}: SendModalProps) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {selectedService === "receive" && (
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
                You've got Transfer!
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
                  From:
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    paddingTop: 5,
                   
                  }}
                >
                  GMB00342123MB123
                </Text>
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
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    paddingTop: 5,
                    width: 60,
                  }}
                >
                  $500
                </Text>
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
                alert("You've Declined a Transfer!");
                onClose();
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  marginRight: -10,
                }}
              >
                DECLINE
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                alert("Transfer Accepted!");
                onClose();
              }}
            >
              <Text
                style={{
                  color: "#45f248",
                  fontSize: 20,
                  marginHorizontal: 20,
                }}
              >
                ACCEPT
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
    alignItems:"center"
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
    borderColor: "white",
    width: 230,
    height: 40,
    color: "white",
    paddingLeft: 10,
    fontStyle: "italic",
  },
});













