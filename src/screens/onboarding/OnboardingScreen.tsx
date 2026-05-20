import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";

export default function OnboardingScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
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
          Order food from your {"\n"}
          favorite restaurants
        </Text>

        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
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
    </SafeAreaView>
  );
}
