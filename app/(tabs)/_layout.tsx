import { TabBar } from "@/src/components/tab-bar";
import { THEME } from "@/src/themes";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              size={size}
              name={focused ? "bag" : "bag-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
