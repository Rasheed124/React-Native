import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';


interface PayMethodCardProps {
  isSelected?: boolean
  title: string
  icon: React.ReactNode
  onPress?: () => void
}

const PaymentCard = ({isSelected = false, title, icon, onPress} : PayMethodCardProps) => {
  return (
     <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && <View style={styles.checkMarkContainer}>

        <Entypo name="check" size={s(12)} color="#fff" />
        </View>}
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PaymentCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  selectedCardStyle: {
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    justifyContent: "center",
    alignItems: "center",
  },
});
