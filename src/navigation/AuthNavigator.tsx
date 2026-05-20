import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
        }}
      />
    </Stack.Navigator>
  );
}
