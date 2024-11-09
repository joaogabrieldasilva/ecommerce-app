import { Button } from "@/src/components/button";
import { CartProduct } from "@/src/components/cart-product";
import { VisaLogo } from "@/src/components/icons/visa-logo";
import { THEME } from "@/src/themes";
import { Product } from "@/src/types/product";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: 1,
    name: "Vestido Curto com Gola Halter",
    category: "dress",
    imageUrl: "https://img.lojasrenner.com.br/item/583798201/original/3.jpg",
    price: 49.9,
    rate: 4.5,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
  {
    id: 2,
    name: "Vestido Curto com Gola V",
    category: "dress",
    imageUrl: "https://img.lojasrenner.com.br/item/624027754/original/3.jpg",
    price: 129.9,
    rate: 4.8,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
] as Product[];

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>
      <FlatList
        data={products}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartProduct
            {...item}
            quantity={1}
            onChangeQuantity={console.log}
            onPressDelete={console.log}
          />
        )}
        ListFooterComponent={
          <>
            <Text style={styles.shippingTitle}>Shipping Information</Text>

            <View style={styles.cardContainer}>
              <VisaLogo />
              <Text>**** **** **** 2143</Text>
            </View>
            <View style={styles.paymentContainer}>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Total (9 items)</Text>
                <Text style={styles.priceValue}>R$1,014.95</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Shipping Fee</Text>
                <Text style={styles.priceValue}>R$0,00</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Discount</Text>
                <Text style={styles.priceValue}>R$0,00</Text>
              </View>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Sub Total</Text>
              <Text style={styles.priceValue}>R$1,014.95</Text>
            </View>
          </>
        }
      />
      <Button text="Pay" onPress={() => {}} style={{ marginHorizontal: 16 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 84,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: THEME.COLORS.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },

  shippingTitle: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 16,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    columnGap: 12,
    paddingHorizontal: 8,
    backgroundColor: THEME.COLORS.backgroundAccentColor,
  },
  paymentContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.COLORS.textTertiary,
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  priceLabel: {
    color: THEME.COLORS.textPrimary,
  },
  priceValue: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
  },
});
