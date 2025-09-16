import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SendModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedService: null | "send" | "eceive" | "topup" | "payment";
};

export default function SendModal({
  visible,
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
          {selectedService === "payment" && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#bcb9bdff",
                      fontWeight: "bold",
                      width: 130,
                      padding: 12,
                      borderRadius: 20,
                      backgroundColor: "#3c293fff",
                      textAlign: "center",
                    }}
                  >
                    Pay With Card
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#bcb9bdff",
                      fontWeight: "bold",
                      width: 130,
                      padding: 12,
                      borderRadius: 20,
                      backgroundColor: "#3c293fff",
                      textAlign: "center",
                    }}
                  >
                    QR-Pay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={onClose}>
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

            <TouchableOpacity
              onPress={() => {
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
                Next
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
});








