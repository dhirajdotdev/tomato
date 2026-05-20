import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";

import MyOrdersScreen from "../screens/drawer/MyOrdersScreen";

import SettingsScreen from "../screens/drawer/SettingsScreen";

import HelpScreen from "../screens/drawer/HelpScreen";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: "white",

        headerStyle: {
          backgroundColor: "#e23744",
        },
      }}
    >
      <Drawer.Screen
        name="Food Delivery"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen name="My Orders" component={MyOrdersScreen} />

      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
