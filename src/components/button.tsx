import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../themes";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  leftIcon?: ReactNode;
} & TouchableOpacityProps;

export function Button({ text, leftIcon, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      {...props}
    >
      {leftIcon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.textPrimary,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 6,
    paddingVertical: 16,
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
