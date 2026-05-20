import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function RestaurantDetailScreen({ route, navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const {
    name,
    image,
    category,
    description,
    area,
    price,
    restaurantName,
    cuisine,
    rating,
    deliveryTime,
  } = route.params;
  const { addToCart } = useCart();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#e23744" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }} numberOfLines={1}>
          {name}
        </Text>
        <View style={{ width: 28 }} />
      </View>

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
            height: 250,
            marginTop: 12,
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

          <View
            style={{
              marginTop: 20,
              padding: 16,
              backgroundColor: "#f9f9f9",
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 8,
                color: "#333",
              }}
            >
              About this restaurant
            </Text>
            <Text
              style={{
                lineHeight: 22,
                color: "#666",
              }}
            >
              {description}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Restaurant
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {restaurantName}
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Delivery Time
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {deliveryTime}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Cuisine
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {cuisine}
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: "#999",
                  marginBottom: 4,
                }}
              >
                Rating
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {rating} ★
              </Text>
            </View>
          </View>

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
    </SafeAreaView>
  );
}
