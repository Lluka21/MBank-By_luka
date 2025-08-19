
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.headerText}>Add New Card</Text>
//         <BankCard
//           title="VISA"
//           rank="Platinum"
//           number="* * * * * * * "
//           backgroundColor={cardColor}
//           style={{ borderRadius: 15 }}
//         />
//         <Text style={styles.label>Color</Text>
//         <View style={styles.colorRow}>
//            
//         <Text style={styles.label}>Name</Text>
//         <TextInput
//           placeholder=""
//           placeholderTextColor="purple"
//           style={styles.inputCommon}
//         />
//         <Text style={styles.label}>Card Number</Text>
//         <TextInput
//           placeholde
//           placeholderTextColor="purple"
//           style={styles.inputCommon}
//         />
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.smallLabel}>Valid Thu</Text>
//             <TextInput
//               placeholder=""
//               placeholderTextColor="purple"
//               style=
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 20 }}>
//             <Text style={styles.smallLabel}>Cvv</Text>
//             <TextInput
//               placeholder=""
//               placeholderTextColor="purple"
//               style={styles.inputCommon}
//             />
//           </View>
//         </View>
//       </View>
//     



import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BankCard } from "./card";

export default function AddNewCard() {
  const [cardColor, setCardColor] = useState("#027DFF");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Add New Card</Text>

        <BankCard
          title="VISA"
          rank="Platinum"
          number="* * * * * * * "
          backgroundColor={cardColor}
          style={{ borderRadius: 15 }}
        />

        {/* Color Picker */}
        <Text style={styles.label}>Color</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={() => setCardColor("#e2bb3aff")}>
            <View
              style={{
                backgroundColor: "#e2bb3aff",
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCardColor("#731ec2ff")}>
            <View
              style={{
                backgroundColor: "#731ec2ff",
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCardColor("#1d82d4ff")}>
            <View
              style={{
                backgroundColor: "#1d82d4ff",
                width: 30,
                height: 30,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder=""
          placeholderTextColor="purple"
          style={styles.inputCommon}
        />

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          placeholder=""
          placeholderTextColor="purple"
          style={styles.inputCommon}
        />

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallLabel}>Valid Thu</Text>
            <TextInput
              placeholder=""
              placeholderTextColor="purple"
              style={styles.inputCommon}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.smallLabel}>Cvv</Text>
            <TextInput
              placeholder=""
              placeholderTextColor="purple"
              style={styles.inputCommon}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={{ color: "white" }}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={{ color: "grey" }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 55,
    backgroundColor: "#1c0120",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  label: {
    fontSize: 15,
    color: "grey",
    marginBottom: 10,
    marginTop: 20,
  },
  smallLabel: {
    marginBottom: 10,
    color: "grey",
  },
  inputCommon: {
    borderWidth: 1,
    backgroundColor: "#3c293fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: "white",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
  },
  saveButton: {
    marginTop: 35,
    borderWidth: 1,
    width: 360,
    padding: 12,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#1d82d4ff",
  },
  cancelButton: {
    marginTop: 20,
  },
});






