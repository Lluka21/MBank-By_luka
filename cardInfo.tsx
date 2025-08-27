import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BankCard } from "./card";

export default function cardInfo() {

  const
  
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={{ color: "white", fontSize: 20 }}>Card Information</Text>
      </View>
      <View style={styles.cardHeader}>
        <View>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 7 }}>
            Card List
          </Text>
          <Text style={{ color: "grey", fontSize: 12 }}>
            You have 2 active cards
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.editCardBtn}>
            <Text style={{ color: "grey" }}>Edit card Information</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ width: 340, height: 200, position: "relative", marginTop: 40 }}
      >
        <BankCard
          title="MasterCard"
          rank="Gold"
          number="* * * * 1234"
          backgroundColor="#c0b519ff"
          style={{ position: "absolute", top: 20, left: 10 }}
        />
        <BankCard
          title="VISA"
          rank="Platinum"
          number="* * * * 0245"
          backgroundColor="#027DFF"
        />
      </View>
      <View style={styles.TotalBalanceSection}>
        <View>
          <Text style={{ color: "grey", fontSize: 20, marginBottom: 7 }}>
            Total Balance
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginBottom: 7 }}>
            654,000.00$
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ color: "grey", fontSize: 14 }}>20%</Text>
          <Ionicons name="arrow-up" size={20} color="#45f248" />
        </View>
      </View>
      <View style={styles.earnSpendSectionStyle}>
        <TouchableOpacity style={styles.earnContainer}>
          <Text style={{ color: "grey", marginBottom: 10, fontSize: 20 }}>
            Earn
          </Text>
          <Text style={{ color: "grey" }}>36 000.00$</Text>
          <Ionicons name="analytics-outline" size={70} color="#45f248" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.spendContainer}>
          <Text
            style={{
              color: "grey",
              marginBottom: 10,
              fontSize: 20,
            }}
          >
            Spend
          </Text>
          <Text style={{ color: "grey" }}>7 000.00$</Text>
          <Ionicons name="trending-down-outline" size={70} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.myProductsSection}>
        <View>
          <Text style={{ color: "grey", fontSize: 20, marginBottom: 7 }}>
            My Products
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addProductBtn}>
            <Text style={{ color: "grey" }}>+ Add Product</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userSectionStyle}>
        <TouchableOpacity style={styles.accountAndCardContainer}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="card-outline" size={24} color="white" />
            <Ionicons name="person-outline" size={24} color="white" />
          </View>
          <Text style={{ color: "grey", marginTop: 10, fontSize: 15 }}>
            Account and Cards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.savingsContainer}>
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text
            style={{
              color: "grey",
              marginTop: 10,
              fontSize: 15,
            }}
          >
            Savings
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.requestLoan}>
        <View
          style={{
            flexDirection: "row",
            gap: 9,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontSize: 15,
            }}
          >
            Request a Loan
          </Text>
          <Ionicons name="document-text-outline" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c0120",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 55,
  },
  cardHeader: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
  },
  editCardBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
  },
  cards: {
    marginTop: 30,
    gap: 10,
  },
  TotalBalanceSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
  },
  earnSpendSectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
    marginBottom: 23,
  },
  earnContainer: {
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
    width: 160,
    height: 150,
  },
  spendContainer: {
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
    width: 160,
    height: 150,
  },
  myProductSectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 400,
    gap: 20,
  },
  myProductsSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
  },
  addProductBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
  },
  userSectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
    marginBottom: 23,
  },
  accountAndCardContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
    width: 160,
    height: 100,
  },
  savingsContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
    width: 160,
    height: 100,
  },
  requestLoan: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#3c293fff",
    width: 340,
  },
});

