import { ProductCard } from "@/src/components/product-card";
import { THEME } from "@/src/themes";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: 1,
    name: "Camiseta Básica",
    category: "Roupas Casuais",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 49.9,
    rate: 4.5,
  },
  {
    id: 2,
    name: "Calça Jeans Slim",
    category: "Roupas Casuais",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 129.9,
    rate: 4.8,
  },
  {
    id: 3,
    name: "Vestido Floral",
    category: "Roupas Femininas",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 89.9,
    rate: 4.7,
  },
  {
    id: 4,
    name: "Camisa Social Branca",
    category: "Roupas Formais",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 99.9,
    rate: 4.3,
  },
  {
    id: 5,
    name: "Jaqueta de Couro",
    category: "Jaquetas e Casacos",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 249.9,
    rate: 4.9,
  },
  {
    id: 6,
    name: "Shorts de Sarja",
    category: "Roupas Casuais",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 69.9,
    rate: 4.1,
  },
  {
    id: 7,
    name: "Blusa de Lã",
    category: "Roupas de Inverno",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 109.9,
    rate: 4.6,
  },
  {
    id: 8,
    name: "Saia Midi",
    category: "Roupas Femininas",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 79.9,
    rate: 4.4,
  },
  {
    id: 9,
    name: "Moletom com Capuz",
    category: "Roupas Casuais",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 119.9,
    rate: 4.2,
  },
  {
    id: 10,
    name: "Tênis Esportivo",
    category: "Calçados",
    imageUrl:
      "https://img.ltwebstatic.com/images3_spmp/2024/09/20/76/1726761643f48502bad6e0735af5fa12cf93368871_thumbnail_900x.webp",
    price: 199.9,
    rate: 4.8,
  },
];

const normalizeString = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function Index() {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchFilter) {
      return products;
    }

    return products.filter((product) => {
      return normalizeString(product.name).includes(
        normalizeString(searchFilter)
      );
    });
  }, [searchFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Hello, Welcome</Text>
          <Text style={styles.welcomeName}>João Gabriel</Text>
        </View>
        <Image
          style={styles.profilePicture}
          source={{
            uri: "https://github.com/joaogabrieldasilva.png",
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={24} style={styles.inputIcon} />
        <TextInput
          value={searchFilter}
          onChangeText={setSearchFilter}
          style={styles.input}
          placeholder="Search clothes..."
          placeholderTextColor={THEME.COLORS.textTertiary}
        />
      </View>
      <FlatList
        data={filteredProducts}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 84 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.navigate("/details")}>
            <ProductCard {...item} />
          </Pressable>
        )}
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 16,
    color: THEME.COLORS.textSecondary,
  },
  welcomeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.textPrimary,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
    borderWidth: 1,
    borderColor: "#CAC9C9",
    borderRadius: 8,
    marginVertical: 16,
    paddingLeft: 12,
  },
  inputIcon: {
    color: "#CAC9C9",
  },
  input: {
    flex: 1,
    paddingVertical: 16,
  },
});
