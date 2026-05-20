import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";

import { fetchMeals } from "../../services/api";

export default function HomeScreen({ navigation }: any) {
  const [meals, setMeals] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#e23744" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
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
                  instructions: item.strInstructions,
                  area: item.strArea,
                  price,
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
    </View>
  );
}
