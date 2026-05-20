import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation/RootNavigator";

import { AuthProvider } from "./src/context/AuthContext";

import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <RootNavigator />
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
