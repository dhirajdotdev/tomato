import { View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }: any) {
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
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        Profile
      </Text>

      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          marginTop: 30,
          backgroundColor: "#e23744",
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 14,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Open Drawer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
