import { ActivityIndicator, View } from "react-native";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

import { useAuth } from "../context/AuthContext";

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

 return user ? <TabNavigator /> : <AuthNavigator />;
}
