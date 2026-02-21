import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function BottomNavs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#ecec",
          shadowColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Contact",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="contacts" size={24} color="black" />
          ),
        }}
        name="Contact"
        component={ContactUsScreen}
      />
    </Tab.Navigator>
  );
}
