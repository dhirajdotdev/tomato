import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CartScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
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
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Your Cart</Text>
        <View style={{ width: 28 }} />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          padding: 16,
        }}
      >
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View
              style={{
                marginTop: 100,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                Cart is empty
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 18,
                padding: 14,
                marginBottom: 16,
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 14,
                }}
              />

              <View
                style={{
                  flex: 1,
                  marginLeft: 14,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    color: "#e23744",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  ₹{item.price}
                </Text>

                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#ffe5e8",
                    alignSelf: "flex-start",
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#e23744",
                      fontWeight: "600",
                    }}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <View
          style={{
            backgroundColor: "white",
            padding: 18,
            borderRadius: 18,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Total: ₹{total}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
