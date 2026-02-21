import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  CashIcon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from "../assets/icons";
import { s, vs } from "react-native-size-matters";
import PaymentCard from "./PaymentCard";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Master Card", icon: <MasterCardIcon /> },
  { label: "Paypal", icon: <PaypalIcon /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("Visa");

  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentCard
            isSelected={selectedMethod == item.label}
            onPress={() => setSelectedMethod(item.label)}
            title={item.label}
            icon={item.icon}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
