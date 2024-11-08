import { Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../themes";

type QuantitySelectProps = {
  value: number;
  onChange: (nextQuantity: number) => void;
};

export function QuantitySelect({ value, onChange }: QuantitySelectProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, { opacity: value === 1 ? 0.3 : 1 }]}
        disabled={value === 1}
        onPress={() => onChange(value - 1)}
      >
        <Feather name="minus" size={12} />
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onChange(value + 1)}
      >
        <Feather name="plus" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  buttonContainer: {
    padding: 6,
    borderWidth: 1,
    borderColor: THEME.COLORS.textPrimary,
    borderRadius: 20,
  },
  valueText: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 20,
  },
});
