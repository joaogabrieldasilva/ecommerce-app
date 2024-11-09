import { TabBar } from "@/src/components/tab-bar";
import { useCartStoreProducts } from "@/src/stores/cart-store";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabsLayout() {
  const products = useCartStoreProducts();
  const productCount = products.length;

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
        name="cart"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Ionicons
                size={size}
                name={focused ? "bag" : "bag-outline"}
                color={color}
              />
              {productCount > 0 ? (
                <View
                  style={{
                    position: "absolute",
                    minWidth: 16,
                    height: 16,
                    backgroundColor: "#d63346",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                    top: -4,
                    right: -4,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {productCount}
                  </Text>
                </View>
              ) : null}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
