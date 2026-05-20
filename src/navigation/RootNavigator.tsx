import { ActivityIndicator, View } from "react-native";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

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

 return user ? <DrawerNavigator /> : <AuthNavigator />;
}
