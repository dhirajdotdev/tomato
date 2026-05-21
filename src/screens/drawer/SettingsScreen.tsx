import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";

interface SettingItem {
  id: string;
  label: string;
  icon: string;
  type: "toggle" | "action" | "info";
  value?: boolean;
}

function SettingRow({
  item,
  onToggle,
  onPress,
}: {
  item: SettingItem;
  onToggle?: (value: boolean) => void;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => item.type !== "toggle" && onPress?.()}
      disabled={item.type === "toggle"}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <MaterialIcons name={item.icon as any} size={22} color="#e23744" />
        <Text
          style={{
            fontSize: 15,
            marginLeft: 12,
            color: "#333",
            fontWeight: "500",
          }}
        >
          {item.label}
        </Text>
      </View>
      {item.type === "toggle" && (
        <Switch
          value={item.value || false}
          onValueChange={onToggle}
          trackColor={{ false: "#ddd", true: "#ffcccc" }}
          thumbColor={item.value ? "#e23744" : "#999"}
        />
      )}
      {item.type === "action" && (
        <MaterialIcons name="chevron-right" size={24} color="#ccc" />
      )}
    </TouchableOpacity>
  );
}

export default function SettingsScreen({ navigation }: any) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] =
    useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#e23744" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Settings</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Profile Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#999",
              paddingHorizontal: 16,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Account
          </Text>
          <View style={{ backgroundColor: "white" }}>
            <SettingRow
              item={{
                id: "profile",
                label: "My Profile",
                icon: "person",
                type: "action",
              }}
              onPress={() => alert("Profile Settings")}
            />
            <SettingRow
              item={{
                id: "addresses",
                label: "Delivery Addresses",
                icon: "location-on",
                type: "action",
              }}
              onPress={() => alert("Manage Addresses")}
            />
            <SettingRow
              item={{
                id: "payment",
                label: "Payment Methods",
                icon: "credit-card",
                type: "action",
              }}
              onPress={() => alert("Manage Payment Methods")}
            />
          </View>
        </View>

        {/* Notifications Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#999",
              paddingHorizontal: 16,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Notifications
          </Text>
          <View style={{ backgroundColor: "white" }}>
            <SettingRow
              item={{
                id: "push",
                label: "Push Notifications",
                icon: "notifications",
                type: "toggle",
                value: notificationsEnabled,
              }}
              onToggle={(value) => setNotificationsEnabled(value)}
            />
            <SettingRow
              item={{
                id: "email",
                label: "Email Notifications",
                icon: "mail",
                type: "toggle",
                value: emailNotificationsEnabled,
              }}
              onToggle={(value) => setEmailNotificationsEnabled(value)}
            />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#999",
              paddingHorizontal: 16,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Preferences
          </Text>
          <View style={{ backgroundColor: "white" }}>
            <SettingRow
              item={{
                id: "language",
                label: "Language",
                icon: "language",
                type: "action",
              }}
              onPress={() => alert("Select Language")}
            />
            <SettingRow
              item={{
                id: "theme",
                label: "App Theme",
                icon: "brightness-4",
                type: "action",
              }}
              onPress={() => alert("Choose Theme")}
            />
          </View>
        </View>

        {/* More Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#999",
              paddingHorizontal: 16,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            More
          </Text>
          <View style={{ backgroundColor: "white" }}>
            <SettingRow
              item={{
                id: "about",
                label: "About Tomato",
                icon: "info",
                type: "action",
              }}
              onPress={() =>
                alert("About Tomato - Delivery App\nVersion 1.0.0")
              }
            />
            <SettingRow
              item={{
                id: "privacy",
                label: "Privacy Policy",
                icon: "privacy-tip",
                type: "action",
              }}
              onPress={() => alert("Privacy Policy")}
            />
            <SettingRow
              item={{
                id: "terms",
                label: "Terms & Conditions",
                icon: "description",
                type: "action",
              }}
              onPress={() => alert("Terms & Conditions")}
            />
          </View>
        </View>

        {/* Logout Section */}
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff3f1",
              paddingVertical: 14,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e23744",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onPress={() => alert("Logged out successfully!")}
          >
            <MaterialIcons name="logout" size={20} color="#e23744" />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#e23744",
                marginLeft: 8,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
