import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "coral",
        tabBarActiveBackgroundColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AntDesign name={"home"} size={14} color={color} />
            ) : (
              <AntDesign name={"home"} size={14} color={'black'} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="sigin"
        options={{
          title: "Sigin",
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={14} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}
