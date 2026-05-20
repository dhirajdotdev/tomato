import { View, Text, TouchableOpacity } from "react-native";

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#e23744",
        }}
      >
        Tomato
      </Text>

      <Text
        style={{
          marginTop: 16,
          textAlign: "center",
          color: "#666",
          fontSize: 16,
        }}
      >
              Order food from your { "\n" }
              favorite restaurants
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#e23744",
          paddingHorizontal: 32,
          paddingVertical: 16,
          borderRadius: 14,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
