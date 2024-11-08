import { Button } from "@/src/components/button";
import { QuantitySelect } from "@/src/components/quantity-select";
import { SizeSelect } from "@/src/components/size-select";
import { THEME } from "@/src/themes";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const sizeOptions = [
  {
    label: "S",
    value: "s",
  },
  {
    label: "M",
    value: "m",
  },
  {
    label: "L",
    value: "l",
  },
  {
    label: "XL",
    value: "xl",
  },
];

export default function Details() {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0].value);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <ImageBackground
          borderRadius={16}
          style={styles.productImage}
          source={{
            uri: "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
          }}
        >
          <TouchableOpacity
            onPress={router.back}
            style={styles.backIconContainer}
          >
            <Ionicons style={styles.backIcon} name="chevron-back" size={24} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <View style={styles.topActionsContainer}>
            <Text style={styles.productName}>Light Dress Bless</Text>
            <QuantitySelect
              value={selectedQuantity}
              onChange={setSelectedQuantity}
            />
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons style={styles.starIcon} name="star" size={14} />
            <Text style={styles.rateText}>
              {new Intl.NumberFormat("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
              }).format(5.0)}
            </Text>
            <Text style={styles.ratingCount}>(7.932 reviews)</Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            explicabo autem officia deleniti voluptatum nostrum enim cumque
            architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at
            officiis ab?
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Choose Size</Text>
          <View style={{ marginTop: 12 }}>
            <SizeSelect
              options={sizeOptions}
              value={selectedSize}
              onChange={setSelectedSize}
            />
          </View>
        </View>
      </ScrollView>
      <Button
        text="Add to Cart | $199.9"
        onPress={() => {}}
        style={{ marginTop: 16 }}
        leftIcon={<Ionicons size={20} name="bag-outline" color="white" />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.backgroundColor,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  infoContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.COLORS.textTertiary,
    paddingBottom: 16,
  },
  topActionsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  productImage: {
    width: "100%",
    height: height * 0.5,
  },
  backIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: THEME.COLORS.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    margin: 16,
  },
  backIcon: {
    color: THEME.COLORS.textPrimary,
  },
  productName: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  ratingCount: {
    color: "#05abe3",
  },
  description: { marginTop: 16 },
  starIcon: {
    color: "#ffbb00",
  },
  rateText: {
    color: THEME.COLORS.textPrimary,
  },
  sizeContainer: {
    marginTop: 16,
  },
  sizeTitle: {
    color: THEME.COLORS.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
