import { DressIcon } from "@/src/components/icons/dress";
import { IconProps } from "@/src/components/icons/icon-props";
import { PantsIcon } from "@/src/components/icons/pants";
import { TShirtIcon } from "@/src/components/icons/t-shirt";
import { ProductCard } from "@/src/components/product-card";
import { THEME } from "@/src/themes";
import { Product } from "@/src/types/product";
import { Ionicons } from "@expo/vector-icons";
import { IconProps as ExpoVectorIconProps } from "@expo/vector-icons/build/createIconSet";
import { Link } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
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
  {
    id: 3,
    name: "Camiseta com Textura Horizontal",
    category: "t-shirt",
    imageUrl: "https://img.lojasrenner.com.br/item/921649189/original/3.jpg",
    price: 89.9,
    rate: 4.7,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
  {
    id: 4,
    name: "Camiseta Comfort em Algodão e",
    category: "t-shirt",
    imageUrl: "https://img.lojasrenner.com.br/item/927608783/original/3.jpg",
    price: 99.9,
    rate: 4.3,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
  {
    id: 5,
    name: "Calça Jogger em Moletom com Bolsos Táticos Preto",
    category: "pants",
    imageUrl: "https://img.lojasrenner.com.br/item/877869511/original/3.jpg",
    price: 249.9,
    rate: 4.9,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
  {
    id: 6,
    name: "Calça Baggy em Jeans com Recortes e Bolso Cargo Preto",
    category: "pants",
    imageUrl: "https://img.lojasrenner.com.br/item/894080141/original/3.jpg",
    price: 69.9,
    rate: 4.1,
    reviewCount: 7190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo autem officia deleniti voluptatum nostrum enim cumque architecto, hic eveniet fugit quasi, quis at maxime. Ipsum quam at officiis ab?",
  },
] as Product[];

const categories = [
  {
    label: "Todos",
    value: null,
    icon: (props: Partial<ExpoVectorIconProps<keyof typeof Ionicons>>) => (
      <Ionicons {...props} name="grid-outline" />
    ),
  },
  {
    label: "Vestidos",
    value: "dress",
    icon: (props: IconProps) => <DressIcon {...props} />,
  },
  {
    label: "Camisas",
    value: "t-shirt",
    icon: (props: IconProps) => <TShirtIcon {...props} />,
  },
  {
    label: "Calças",
    value: "pants",
    icon: (props: IconProps) => <PantsIcon {...props} />,
  },
] as const;

const normalizeString = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function Index() {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let filteredProducts = products;

    if (searchFilter) {
      filteredProducts = products.filter((product) => {
        return normalizeString(product.name).includes(
          normalizeString(searchFilter)
        );
      });
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    return filteredProducts;
  }, [searchFilter, selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
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
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          placeholderTextColor={THEME.COLORS.textTertiary}
        />
      </View>
      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          style={{ marginBottom: 12 }}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => {
            const Icon = item.icon;
            const isSelected = item.value === selectedCategory;

            return (
              <Pressable
                disabled={isSelected}
                onPress={() => setSelectedCategory(item.value)}
              >
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: THEME.COLORS.textTertiary,
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 4,
                    borderRadius: 8,
                    padding: 8,
                    backgroundColor: isSelected
                      ? THEME.COLORS.foregroundColor
                      : THEME.COLORS.backgroundColor,
                  }}
                >
                  <Icon
                    color={
                      isSelected
                        ? THEME.COLORS.textForegroundContrast
                        : THEME.COLORS.textPrimary
                    }
                    size={16}
                  />
                  <Text
                    style={{
                      color: isSelected
                        ? THEME.COLORS.textForegroundContrast
                        : THEME.COLORS.textPrimary,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
      <FlatList
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{
          gap: 12,
          paddingBottom: 84,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/details", params: item }}>
            <ProductCard {...item} />
          </Link>
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
