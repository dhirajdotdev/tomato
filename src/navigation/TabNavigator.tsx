import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import RestaurantStack from "./RestaurantStack";

import SearchScreen from "../screens/tabs/SearchScreen";

import OrdersScreen from "../screens/tabs/OrdersScreen";

import ProfileScreen from "../screens/tabs/ProfileScreen";
import { useCart } from "../context/CartContext";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { cart } = useCart();

  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    if (routeName === "RestaurantDetail" || routeName === "Cart") {
      return {
        display: "none",
      };
    }

    return;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e23744",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={RestaurantStack}
        /*@ts-ignore*/
        options={({ route }) => ({
          title: "Home",

          tabBarStyle: getTabBarVisibility(route),

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarBadge: cart.length > 0 ? cart.length : undefined,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
