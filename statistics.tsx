import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Statistics() {
  const Activities = ({ title, price }: { title: string; price: string }) => {
    return (
      <View style={styles.activitySection}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="ellipse" size={10} color="#45f248" />
          <Text style={{ color: "white" }}>{title}</Text>
        </View>
        <Text style={{ color: "white" }}>{price}</Text>
      </View>
    );
  };

  const getActivityIconName = (title: string) => {
    switch (title) {
      case "Shopping":
        return "bag-outline";
      case "Health":
        return "heart";
      case "Food":
        return "restaurant";
      case "E-money Topup":
        return "card-outline";
      case "Payment":
        return "wallet-outline";
      default:
        return "help-circle-outline";
    }
  };

  const ActivityList = ({
    title,
    product,
    date,
    price,
  }: {
    title: string;
    product: string;
    date: string;
    price: string;
  }) => {
    const iconName = getActivityIconName(title);

    return (
      <View style={styles.ActivityListSection}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons name={iconName} size={24} color="white" />
          <View>
            <Text style={{ color: "white", fontSize: 24 }}>{title}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 340,
          }}
        >
          <View>
            <Text style={{ color: "grey", fontSize: 18 }}>{product}</Text>
            <Text style={{ color: "white", fontSize: 12 }}>{date}</Text>
          </View>
          <View>
            <Text style={{ color: "grey", fontSize: 25 }}>{price}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.headerText}>Statistics</Text>

      <View style={styles.card}>
        <View style={styles.circleWrapper}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>85%</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Activities title="Shopping" price="$ 1753,00" />
          <Activities title="Health" price="$ 1010,00" />
          <Activities title="Food" price="$ 952,00" />
        </View>
      </View>

      <View>
        <ActivityList
          title="Shopping"
          product="Cotton Jeans"
          date="15 Jul 2025"
          price="$90"
        />
        <ActivityList
          title="Health"
          product="Allianz Insurance"
          date="23 Jul 2025"
          price="$190"
        />
        <ActivityList
          title="Health"
          product="Dental Filling"
          date="1 Aug 2025"
          price="$290"
        />
        <ActivityList
          title="Shopping"
          product="Uniqlo Flannel"
          date="24 Aug 2025"
          price="$50"
        />
      </View>
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
  headerText: {
    color: "white",
    fontSize: 20,
    marginBottom: 40,
  },
  card: {
    backgroundColor: "#2a1b2f",
    borderRadius: 16,
    padding: 40,
    alignItems: "center",
    borderWidth: 1,
  },
  circleWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "#45f248",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "white",
    fontSize: 26,
    textAlign: "center",
  },
  activitySection: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 240,
  },
  ActivityListSection: {
    marginTop: 50,
  },
});
