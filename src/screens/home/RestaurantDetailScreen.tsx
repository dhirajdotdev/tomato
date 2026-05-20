import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useCart } from "../../context/CartContext";

export default function RestaurantDetailScreen({ route, navigation }: any) {
  const { name, image, category, instructions, area, price } = route.params;
    const { addToCart } = useCart();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 300,
        }}
      />

      <View
        style={{
          padding: 18,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            marginTop: 8,
            color: "#666",
            fontSize: 16,
          }}
        >
          {category}
          {" • "}
          {area}
        </Text>

        <Text
          style={{
            marginTop: 12,
            color: "#e23744",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          ₹{price}
        </Text>

        <Text
          style={{
            marginTop: 20,
            lineHeight: 24,
            color: "#444",
          }}
        >
          {instructions}
        </Text>

        <TouchableOpacity
          onPress={() => {
            addToCart({
              id: String(Date.now()),
              name,
              price,
              image,
            });

            navigation.navigate("Cart");
          }}
          style={{
            backgroundColor: "#e23744",
            padding: 18,
            borderRadius: 16,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
