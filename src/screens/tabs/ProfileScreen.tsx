import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";

export default function ProfileScreen({ navigation }: any) {
  const { user } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={28} color="#e23744" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Profile</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 24,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
          }}
        >
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1758129718187175936/aRZPB-a4_400x400.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 16,
            }}
          />

          <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 8 }}>
            {user?.name}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#666",
              marginBottom: 20,
            }}
          >
            {user?.email}
          </Text>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#eee",
              marginVertical: 20,
            }}
          />

          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              gap: 16,
            }}
          >
            <View>
              <Text style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>
                Account Type
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#333" }}>
                Premium Member
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>
                Orders Placed
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#333" }}>
                69 Orders
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>
                Member Since
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#333" }}>
                May 2026
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
