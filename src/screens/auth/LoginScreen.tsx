import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

export default function LoginScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await login(email, password);

    if (!result.success) {
      Alert.alert("Login Failed", result.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          Welcome Back
        </Text>

        <Text
          style={{
            color: "#666",
            marginBottom: 40,
          }}
        >
          Login to continue ordering food
        </Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 16,
            borderRadius: 14,
            marginBottom: 16,
            fontSize: 16,
          }}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 16,
            borderRadius: 14,
            marginBottom: 24,
            fontSize: 16,
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#e23744",
            padding: 18,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 40,
            backgroundColor: "#fff3f4",
            padding: 16,
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            Mock Credentials
          </Text>

          <Text>Email: dhiraj@gmail.com</Text>

          <Text>Password: 123456</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
