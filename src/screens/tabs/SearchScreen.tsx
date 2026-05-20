import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const SEARCH_CATEGORIES = [
  { id: 1, name: "Burger", emoji: "🍔" },
  { id: 2, name: "Pizza", emoji: "🍕" },
  { id: 3, name: "Noodles", emoji: "🍜" },
  { id: 4, name: "Asian", emoji: "🍱" },
  { id: 5, name: "Salad", emoji: "🥗" },
  { id: 6, name: "Dessert", emoji: "🍰" },
  { id: 7, name: "Beverage", emoji: "☕" },
  { id: 8, name: "Mexican", emoji: "🌮" },
];

const RECENT_SEARCHES = ["Biryani", "Butter Chicken", "Paneer Pizza", "Samosa"];

export default function SearchScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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
          <MaterialIcons name="menu" size={26} color="#e23744" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Search Food</Text>
        <View style={{ width: 28 }} />
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: 12,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: "#eee",
          }}
        >
          <MaterialIcons name="search" size={20} color="#e23744" />
          <TextInput
            placeholder="Search for food..."
            placeholderTextColor="#bbb"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              flex: 1,
              paddingVertical: 12,
              paddingHorizontal: 8,
              fontSize: 14,
            }}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <MaterialIcons name="close" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={[{ type: "categories" }, { type: "recents" }]}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => {
          if (item.type === "categories") {
            return (
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 12,
                    color: "#333",
                  }}
                >
                  Popular Categories
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                    justifyContent: "space-between",
                  }}
                >
                  {SEARCH_CATEGORIES.map((category) => (
                    <TouchableOpacity
                      key={category.id}
                      onPress={() => setSelectedCategory(category.id)}
                      style={{
                        width: "48%",
                        backgroundColor:
                          selectedCategory === category.id
                            ? "#e23744"
                            : "white",
                        borderRadius: 12,
                        padding: 16,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor:
                          selectedCategory === category.id ? "#e23744" : "#eee",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.05,
                        shadowRadius: 3,
                        elevation: 2,
                        marginBottom: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 28,
                          marginBottom: 6,
                        }}
                      >
                        {category.emoji}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "600",
                          color:
                            selectedCategory === category.id ? "white" : "#333",
                          textAlign: "center",
                        }}
                      >
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            );
          } else {
            return (
              <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 12,
                    color: "#333",
                  }}
                >
                  Recent Searches
                </Text>
                <View style={{ gap: 8 }}>
                  {RECENT_SEARCHES.map((search, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSearchQuery(search)}
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 14,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#eee",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <MaterialIcons name="history" size={18} color="#999" />
                        <Text
                          style={{
                            fontSize: 14,
                            color: "#333",
                            fontWeight: "500",
                          }}
                        >
                          {search}
                        </Text>
                      </View>
                      <MaterialIcons
                        name="arrow-forward"
                        size={16}
                        color="#e23744"
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            );
          }
        }}
      />
    </SafeAreaView>
  );
}
