import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";

interface OrderItem {
  id: string;
  restaurant: string;
  items: string;
  date: string;
  total: number;
  status: "delivered" | "cancelled" | "pending";
  rating?: number;
}

const ordersData: OrderItem[] = [
  {
    id: "ORD001",
    restaurant: "Tomato Kitchen",
    items: "Butter Chicken, Naan, Lassi",
    date: "May 20, 2026",
    total: 24.99,
    status: "delivered",
    rating: 4.5,
  },
  {
    id: "ORD002",
    restaurant: "Spice Corner",
    items: "Pad Thai, Spring Rolls, Iced Tea",
    date: "May 18, 2026",
    total: 18.5,
    status: "delivered",
    rating: 4.0,
  },
  {
    id: "ORD003",
    restaurant: "Green Harvest",
    items: "Buddha Bowl, Hummus Wrap",
    date: "May 15, 2026",
    total: 16.99,
    status: "delivered",
    rating: 5,
  },
  {
    id: "ORD004",
    restaurant: "Grill House",
    items: "BBQ Ribs, Mac & Cheese, Coleslaw",
    date: "May 12, 2026",
    total: 32.0,
    status: "delivered",
    rating: 4.8,
  },
  {
    id: "ORD005",
    restaurant: "Tomato Kitchen",
    items: "Samosa, Dosa, Coffee",
    date: "May 10, 2026",
    total: 14.49,
    status: "delivered",
    rating: 4.2,
  },
];

function OrderCard({ order }: { order: OrderItem }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "#4CAF50";
      case "pending":
        return "#FF9800";
      case "cancelled":
        return "#F44336";
      default:
        return "#666";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return "check-circle";
      case "pending":
        return "schedule";
      case "cancelled":
        return "cancel";
      default:
        return "info";
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: getStatusColor(order.status),
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
            {order.restaurant}
          </Text>
          <Text style={{ fontSize: 12, color: "#999" }}>Order #{order.id}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <MaterialIcons
              name={getStatusIcon(order.status)}
              size={16}
              color={getStatusColor(order.status)}
            />
            <Text
              style={{
                fontSize: 12,
                color: getStatusColor(order.status),
                marginLeft: 4,
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              {order.status}
            </Text>
          </View>
          <Text style={{ fontSize: 13, color: "#666" }}>{order.date}</Text>
        </View>
      </View>

      {/* Items */}
      <Text
        style={{
          fontSize: 13,
          color: "#666",
          marginBottom: 12,
          lineHeight: 20,
        }}
      >
        {order.items}
      </Text>

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          paddingTop: 12,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>
            Total
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
            ${order.total.toFixed(2)}
          </Text>
        </View>
        {order.rating && (
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {[...Array(5)].map((_, i) => (
                <MaterialIcons
                  key={i}
                  name="star"
                  size={14}
                  color={i < Math.floor(order.rating!) ? "#FFB800" : "#ddd"}
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
            <Text style={{ fontSize: 11, color: "#666", marginTop: 4 }}>
              {order.rating} Rating
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: "#e23744",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>
            Reorder
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function MyOrdersScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Orders</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {ordersData.length > 0 ? (
          <>
            <View style={{ paddingVertical: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#666",
                  paddingHorizontal: 16,
                  marginBottom: 8,
                }}
              >
                {ordersData.length} order{ordersData.length !== 1 ? "s" : ""}
              </Text>
            </View>
            {ordersData.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
            <View style={{ height: 20 }} />
          </>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 100,
            }}
          >
            <MaterialIcons name="history" size={64} color="#ddd" />
            <Text style={{ fontSize: 16, color: "#999", marginTop: 16 }}>
              No orders yet
            </Text>
            <Text style={{ fontSize: 13, color: "#bbb", marginTop: 8 }}>
              Your orders will appear here
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
