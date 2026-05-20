import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState, useLayoutEffect } from "react";

import { fetchMeals } from "../../services/api";

export default function HomeScreen({ navigation }: any) {
  const [meals, setMeals] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    const data = await fetchMeals();

    setMeals(data);

    setLoading(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#e23744" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 14,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={26} color="#e23744" />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#e23744",
                letterSpacing: 1,
              }}
            >
              🍅 Tomato
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: "#999",
                marginTop: 2,
              }}
            >
              Food Delivery
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialIcons name="shopping-cart" size={26} color="#e23744" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingBottom: 14,
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: 12,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderColor: "#eee",
            }}
          >
            <MaterialIcons name="location-on" size={18} color="#e23744" />
            <TextInput
              placeholder="Your location"
              placeholderTextColor="#bbb"
              style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 8,
                fontSize: 14,
              }}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
        }}
        renderItem={({ item }) => {
          const price = Math.floor(Math.random() * 500) + 100;

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  id: item.idMeal,
                  name: item.strMeal,
                  image: item.strMealThumb,
                  category: item.strCategory,
                  description: item.restaurantDescription,
                  area: item.restaurantLocation,
                  price,
                  restaurantName: item.restaurantName,
                  cuisine: item.restaurantCuisine,
                  rating: item.restaurantRating,
                  deliveryTime: item.restaurantDeliveryTime,
                })
              }
              style={{
                backgroundColor: "white",
                borderRadius: 18,
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              <Image
                source={{
                  uri: item.strMealThumb,
                }}
                style={{
                  width: "100%",
                  height: 220,
                }}
              />

              <View
                style={{
                  padding: 14,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      flex: 1,
                    }}
                    numberOfLines={1}
                  >
                    {item.strMeal}
                  </Text>

                  <View
                    style={{
                      backgroundColor: "#267e3e",
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      4.3 ★
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    marginTop: 6,
                    color: "#666",
                  }}
                >
                  {item.strCategory}
                  {" • "}
                  {item.strArea}
                </Text>

                <View
                  style={{
                    marginTop: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "#e23744",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    ₹{price}
                  </Text>

                  <Text
                    style={{
                      color: "#666",
                    }}
                  >
                    25 mins
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
