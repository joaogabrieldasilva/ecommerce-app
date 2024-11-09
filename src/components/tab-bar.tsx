import { BottomTabBarProps } from "expo-router/node_modules/@react-navigation/bottom-tabs/src/types";
import { Pressable, StyleSheet, View } from "react-native";
import { THEME } from "../themes";

export function TabBar({ descriptors, state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.key}
            style={styles.tabIconContainer}
            onPress={onPress}
          >
            {options.tabBarIcon
              ? options.tabBarIcon({
                  color: THEME.COLORS.textForegroundContrast,
                  focused: isFocused,
                  size: 24,
                })
              : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24,
    alignSelf: "center",
    padding: 8,
    borderRadius: 32,
    backgroundColor: "black",
    bottom: 48,
  },
  tabIconContainer: {
    alignItems: "center",
    backgroundColor: "#343031",
    padding: 8,
    borderRadius: 32,
  },
});
