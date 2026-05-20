import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useCart } from "../../context/CartContext";

export default function OrdersScreen({ navigation }: any) {
  const { cart } = useCart();

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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={28} color="#e23744" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Your Orders</Text>
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
    </SafeAreaView>
  );
}
