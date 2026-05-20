import { View, Text, TouchableOpacity } from "react-native";

import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        Welcome Back
      </Text>

      <TouchableOpacity
        onPress={login}
        style={{
          backgroundColor: "#e23744",
          paddingHorizontal: 40,
          paddingVertical: 16,
          borderRadius: 14,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Mock Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
