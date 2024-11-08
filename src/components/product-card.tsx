import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { THEME } from "../themes";

const { width, height } = Dimensions.get("window");

type ProductCardProps = {
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  rate: number;
};

export function ProductCard({
  name,
  category,
  imageUrl,
  price,
  rate,
}: ProductCardProps) {
  return (
    <View>
      <Image
        borderRadius={16}
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productCategory}>{category}</Text>
      <View style={styles.bottomInfoContainer}>
        <Text style={styles.productPrice}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
        <View style={styles.rateContainer}>
          <Ionicons name="star" size={14} style={styles.starIcon} />
          <Text style={styles.rateText}>{rate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / 2 - 24,
    height: width * 0.65,
  },
  productName: {
    marginTop: 6,
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 14,
  },
  productCategory: {
    color: THEME.COLORS.textSecondary,
    marginBottom: 12,
    fontSize: 14,
  },
  bottomInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 14,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  starIcon: {
    color: "#ffbb00",
  },
  rateText: {
    color: THEME.COLORS.textPrimary,
  },
});
