import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";

import RestaurantDetailScreen from "../screens/home/RestaurantDetailScreen";

import CartScreen from "../screens/home/CartScreen";

const Stack = createNativeStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Tomato",
          headerStyle: {
            backgroundColor: "#e23744",
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: "Restaurant",
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "#e23744",
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
