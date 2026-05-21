import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "Browse restaurants, select items, add to cart, and checkout. Delivery typically arrives in 20-30 minutes.",
  },
  {
    id: 2,
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel orders within 2 minutes of placing. Go to My Orders and tap Cancel.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit cards, digital wallets, and cash on delivery.",
  },
  {
    id: 4,
    question: "Is there a delivery fee?",
    answer:
      "Delivery fees vary by location. Free delivery on orders over $20 in most areas.",
  },
  {
    id: 5,
    question: "How do I track my order?",
    answer:
      "Real-time tracking is available in My Orders. You'll also get SMS and push notifications.",
  },
  {
    id: 6,
    question: "What if my order arrives late?",
    answer:
      "Contact our support team within 24 hours for refunds or credits. Quality guaranteed!",
  },
];

function FAQItem({
  item,
  isOpen,
  onPress,
}: {
  item: FAQItem;
  isOpen: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 14, fontWeight: "600", flex: 1, color: "#333" }}
        >
          {item.question}
        </Text>
        <MaterialIcons
          name={isOpen ? "expand-less" : "expand-more"}
          size={24}
          color="#e23744"
        />
      </View>
      {isOpen && (
        <Text
          style={{ marginTop: 12, fontSize: 13, color: "#666", lineHeight: 20 }}
        >
          {item.answer}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default function HelpScreen({ navigation }: any) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Help & Support</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* FAQ Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Frequently Asked Questions
          </Text>
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={expandedId === item.id}
              onPress={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
            />
          ))}
        </View>

        {/* Contact Section */}
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Contact Us
          </Text>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 16,
              paddingVertical: 16,
              marginHorizontal: 16,
              borderRadius: 8,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
              onPress={() => Linking.openURL("mailto:support@tomato.app")}
            >
              <MaterialIcons name="email" size={20} color="#e23744" />
              <Text style={{ marginLeft: 12, fontSize: 14, color: "#333" }}>
                support@tomato.app
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
              onPress={() => Linking.openURL("tel:+1234567890")}
            >
              <MaterialIcons name="phone" size={20} color="#e23744" />
              <Text style={{ marginLeft: 12, fontSize: 14, color: "#333" }}>
                +1 (234) 567-890
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="schedule" size={20} color="#e23744" />
              <Text style={{ marginLeft: 12, fontSize: 14, color: "#333" }}>
                Available 24/7
              </Text>
            </View>
          </View>
        </View>

        {/* App Info */}
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>
            App Information
          </Text>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 14, color: "#666" }}>Version</Text>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>1.0.0</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 14, color: "#666" }}>Build</Text>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                2026.05.21
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingTop: 12,
                borderTopWidth: 1,
                borderTopColor: "#eee",
              }}
              onPress={() => Linking.openURL("https://tomato.app/terms")}
            >
              <Text
                style={{ fontSize: 14, color: "#e23744", fontWeight: "600" }}
              >
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
