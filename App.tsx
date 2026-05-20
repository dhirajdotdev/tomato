import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation/RootNavigator";

import { AuthProvider } from "./src/context/AuthContext";

import { CartProvider } from "./src/context/CartContext";

const linking = {
  prefixes: ["foodapp://"],

  config: {
    screens: {
      RestaurantDetail: "restaurant/:id",
    },
  },
};

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer linking={linking}>
          <RootNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
