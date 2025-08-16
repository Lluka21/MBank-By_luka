import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { CalculateBalanceContext } from "../context/BalanceContext";
import PaymentModal from "../modals/PaymentModal";
import { default as ReceiveModal } from "../modals/ReceiveModal";
import { default as SendModal } from "../modals/SendModal";
import { default as TopupModal } from "../modals/TopupModal";

type BankCardProps = {
  title: string;
  rank: string;
  number: string;
  backgroundColor: string;
  style?: ViewStyle;
};

export const BankCard = ({
  title,
  rank,
  number,
  backgroundColor,
  style,
}: BankCardProps) => (
  <View style={[styles.yourCardDesign, { backgroundColor }, style]}>
    <View style={styles.cardDetail}>
      <Text style={styles.cardDetailText}>{title}</Text>
      <Text style={styles.cardRank}>{rank}</Text>
      <Text style={styles.cardNum}>{number}</Text>
    </View>
  </View>
);

export default function Card() {
  const context = useContext(CalculateBalanceContext);

  if (!context) {
    throw new Error("CalculateBalanceContext must be used within a provider");
  }

  const { currentBalance } = context;

  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<
    null | "send" | "receive" | "topup" | "payment"
  >(null);

  const Services = () => (
    <View style={styles.servicesContainer}>
      <View>
        <TouchableOpacity
          style={styles.createTransaction}
          onPress={() => {
            setSelectedService("send");
            setVisible(true);
          }}
        >
          <Ionicons name="arrow-up" size={30} color="red" />
        </TouchableOpacity>
        <Text style={{ color: "white", textAlign: "center" }}>Send</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.createTransaction}
          onPress={() => {
            setSelectedService("receive");
            setVisible(true);
          }}
        >
          <Ionicons name="arrow-down" size={30} color="#45f248" />
        </TouchableOpacity>
        <Text style={{ color: "white", textAlign: "center" }}>Receive</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.createTransaction}
          onPress={() => {
            setSelectedService("topup");
            setVisible(true);
          }}
        >
          <Ionicons name="card-outline" size={30} color="grey" />
        </TouchableOpacity>
        <Text style={{ color: "white", textAlign: "center" }}>Topup</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.createTransaction}
          onPress={() => {
            setSelectedService("payment");
            setVisible(true);
          }}
        >
          <Ionicons name="card" size={30} color="grey" />
        </TouchableOpacity>
        <Text style={{ color: "white", textAlign: "center" }}>Payment</Text>
      </View>
    </View>
  );

  const getActivityIconName = (title: string) => {
    switch (title) {
      case "Food":
        return "restaurant";
      case "Health":
        return "heart";
      case "Transfer Receive":
        return "arrow-up";
      case "E-money Topup":
        return "card-outline";
      case "Payment":
        return "wallet-outline";
      default:
        return "help-circle-outline";
    }
  };

  const Activities = ({
    title,
    date,
    price,
  }: {
    title: string;
    date: string;
    price: string;
  }) => {
    const iconName = getActivityIconName(title);
    const priceColor = title === "Transfer Receive" ? "#45f248" : "white";

    return (
      <View style={styles.activityInformation}>
        <View style={styles.activityDetail}>
          <Ionicons
            name={iconName}
            size={24}
            color="white"
            style={{ marginRight: 15 }}
          />

          <View style={styles.namedActivity}>
            <Text style={styles.namedActivityText} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.namedActivityDateText}>{date}</Text>
          </View>

          <View style={styles.activityPrice}>
            <Text style={[styles.activityPriceText, { color: priceColor }]}>
              {price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MBank</Text>
        <Ionicons name="notifications-outline" size={28} color="white" />
      </View>

      <View style={styles.yourCardContainer}>
        <Text style={styles.yourCardText}>Your Card</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 30 }}
        >
          <BankCard
            title="VISA"
            rank="Platinum"
            number="* * * * 0245"
            backgroundColor="#027DFF"
          />
          <BankCard
            title="MasterCard"
            rank="Gold"
            number="* * * * 1234"
            backgroundColor="#c0b519ff"
          />
        </ScrollView>
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <Text style={{ color: "#d3d3d3ec", fontSize: 21 }}>
            Current Balance: {currentBalance}.00$
          </Text>
        </View>
      </View>

      <View style={styles.transactions}>
        <Services />
      </View>

      <View style={styles.recentActivities}>
        <Text style={styles.recentActivitiesText}>Recent Activities</Text>
      </View>

      <View>
        <Activities title="Food" date="15 Jul 2025" price="$ 40,00" />
        <Activities title="Health" date="20 Jul 2025" price="$ 140,00" />
        <Activities
          title="Transfer Receive"
          date="27 Jul 2025"
          price="+$260,00"
        />
        <Activities title="Food" date="1 Aug 2025" price="$ 40,00" />
        <Activities title="E-money Topup" date="1 Aug 2025" price="$ 100,00" />
        <Activities title="Food" date="2 Aug 2025" price="$ 40,00" />
        <Activities
          title="Transfer Receive"
          date="27 Jul 2025"
          price="+$200,00"
        />
      </View>

      {(() => {
        switch (selectedService) {
          case "send":
            return (
              <SendModal
                visible={visible}
                onClose={() => setVisible(false)}
                selectedService={selectedService}
              />
            );
          case "receive":
            return (
              <ReceiveModal
                visible={visible}
                onClose={() => setVisible(false)}
                selectedService={selectedService}
              />
            );
          case "topup":
            return (
              <TopupModal
                visible={visible}
                onClose={() => setVisible(false)}
                selectedService={selectedService}
              />
            );
          case "payment":
            return (
              <PaymentModal
                visible={visible}
                onClose={() => setVisible(false)}
                selectedService={selectedService}
              />
            );

          default:
            return null;
        }
      })()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c0120",
  },
  header: {
    marginTop: 75,
    marginLeft: 30,
    flexDirection: "row",
    gap: 250,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  yourCardContainer: {
    marginLeft: 30,
    marginTop: 20,
  },
  yourCardText: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  yourCardDesign: {
    flexDirection: "row",
    backgroundColor: "#027DFF",
    borderRadius: 25,
    width: 330,
    height: 180,
    padding: 20,
    justifyContent: "flex-start",
    marginRight: 10,
    alignItems: "flex-start",
  },
  cardDetail: {
    marginRight: 50,
    marginBottom: 20,
  },
  cardDetailText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    fontStyle: "italic",
  },
  cardRank: {
    color: "white",
    marginBottom: 70,
  },
  cardNum: {
    color: "white",
  },
  transactions: {
    marginTop: 40,
    marginLeft: 25,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  createTransaction: {
    alignItems: "center",
    backgroundColor: "#a5a4a236",
    borderRadius: 10,
    padding: 15,
    width: 60,
    marginBottom: 10,
  },
  sendServiceText: {
    color: "white",
    textAlign: "center",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  recentActivities: {
    marginTop: 30,
    marginLeft: 32,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    gap: 170,
  },
  recentActivitiesText: {
    color: "white",
    fontSize: 20,
    marginBottom: 30,
  },
  activityInformation: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  activityDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
  },
  namedActivity: {
    flex: 1,
    marginLeft: 10,
  },
  activityPrice: {
    marginLeft: 10,
    alignItems: "flex-end",
  },
  activityPriceText: {
    color: "white",
    fontSize: 20,
  },
  namedActivityText: {
    color: "white",
    fontSize: 20,
  },
  namedActivityDateText: {
    color: "grey",
  },
});
