import { View, Text, FlatList } from "react-native";

import { useCart } from "../../context/CartContext";

export default function OrdersScreen() {
  const { cart } = useCart();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Your Orders
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              padding: 16,
              borderRadius: 16,
              marginBottom: 14,
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
                marginTop: 8,
                color: "#e23744",
                fontWeight: "bold",
              }}
            >
              ₹{item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
