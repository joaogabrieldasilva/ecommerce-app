import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "../themes";
import { Ionicons } from "@expo/vector-icons";
import { QuantitySelect } from "./quantity-select";
import { Product } from "../types/product";

const { width } = Dimensions.get("window");

type CartProductProps = {
  onChangeQuantity: (nextQuantity: number) => void;
  onPressDelete: () => void;
  quantity: number;
} & Product;

export function CartProduct({
  name,
  imageUrl,
  price,
  quantity,
  category,
  onPressDelete,
  onChangeQuantity,
}: CartProductProps) {
  return (
    <View style={styles.container}>
      <Image
        borderRadius={16}
        style={styles.productImage}
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={{ flex: 1 }}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productCategory}>{category}</Text>
          </View>
          <Pressable onPress={() => onPressDelete()}>
            <Ionicons
              name="trash-outline"
              color={THEME.COLORS.textPrimary}
              size={24}
            />
          </Pressable>
        </View>
        <View style={styles.productBottomActions}>
          <Text style={styles.productPrice}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </Text>
          <QuantitySelect value={quantity} onChange={onChangeQuantity} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.COLORS.textTertiary,
    flexDirection: "row",
    columnGap: 12,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: width * 0.25,
    height: width * 0.25,
  },
  productName: {
    color: THEME.COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  },
  productCategory: {
    color: THEME.COLORS.textSecondary,
    fontSize: 14,
  },
  productBottomActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    color: THEME.COLORS.textPrimary,
    fontSize: 14,
    fontWeight: "bold",
  },
});
