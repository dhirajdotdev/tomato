import { View, Text } from "react-native";

export default function MyOrdersScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        My Orders
      </Text>
    </View>
  );
}
