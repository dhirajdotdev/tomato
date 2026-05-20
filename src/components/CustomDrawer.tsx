import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { useAuth } from "../context/AuthContext";

export default function CustomDrawer(props: any) {
  const { user, logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 24,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: "https://i.pravatar.cc/150",
          }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
          }}
        />

        <Text
          style={{
            marginTop: 14,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          {user?.name}
        </Text>

        <Text
          style={{
            color: "#666",
            marginTop: 4,
          }}
        >
          {user?.email}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity
        onPress={async () => {
          await logout();
        }}
        style={{
          margin: 20,
          backgroundColor: "#e23744",
          padding: 16,
          borderRadius: 14,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
