import { Button } from "@/src/components/button";
import { CartProduct } from "@/src/components/cart-product";
import { VisaLogo } from "@/src/components/icons/visa-logo";
import {
  useCartStoreActions,
  useCartStoreProducts,
} from "@/src/stores/cart-store";
import { THEME } from "@/src/themes";
import { Product } from "@/src/types/product";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  const products = useCartStoreProducts();
  const { removeProduct, updateProductAmount } = useCartStoreActions();

  const totalPrice = useMemo(
    () =>
      products.reduce(
        (totalPrice, product) => totalPrice + product.price * product.quantity,
        0
      ),
    [products]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>
      {products?.length > 0 ? (
        <FlatList
          data={products}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartProduct
              {...item}
              onChangeQuantity={(newQuantity) =>
                updateProductAmount(item.id, newQuantity)
              }
              onPressDelete={() => removeProduct(item.id)}
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
                  <Text style={styles.priceValue}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalPrice)}
                  </Text>
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
                <Text style={styles.priceValue}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice)}
                </Text>
              </View>
            </>
          }
        />
      ) : (
        <Text style={styles.noItemsText}>No items added to the cart</Text>
      )}

      {products?.length > 0 ? (
        <Button
          text="Pay"
          onPress={() => {}}
          style={{ marginHorizontal: 16 }}
        />
      ) : null}
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
  noItemsText: {
    color: THEME.COLORS.textSecondary,
    textAlign: "center",
  },
});
