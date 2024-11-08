import { Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../themes";

type QuantitySelectProps = {
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (size: string) => void;
};

export function SizeSelect({ options, value, onChange }: QuantitySelectProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isSelected = option.value === value;

        return (
          <TouchableOpacity
            activeOpacity={1}
            disabled={isSelected}
            style={[
              styles.buttonContainer,
              isSelected
                ? styles.selectedButtonContainer
                : styles.unselectedButtonContainer,
            ]}
            onPress={() => onChange(option.value)}
          >
            <Text
              style={[
                styles.valueText,
                isSelected
                  ? styles.selectedValueText
                  : styles.unselectedValueText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
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
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: THEME.COLORS.textPrimary,
    borderRadius: 20,
  },
  unselectedButtonContainer: {
    backgroundColor: THEME.COLORS.backgroundColor,
  },
  selectedButtonContainer: {
    backgroundColor: THEME.COLORS.foregroundColor,
  },
  valueText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  unselectedValueText: {
    color: THEME.COLORS.textPrimary,
  },
  selectedValueText: {
    color: THEME.COLORS.textForegroundContrast,
  },
});
