import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "./screens/Profile/Profile";
import logo from "./screens/images/Logo.png";
import ProfileNavHeader from "./screens/Profile/ProfileNavHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const complete = await AsyncStorage.getItem("onboardingComplete");
        setOnboardingComplete(complete === "true");
      } catch (error) {
        console.log("get async val error", error);
      }
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {onboardingComplete ? (
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              header: () => <ProfileNavHeader />,
            }}
          />
        ) : (
          <Stack.Screen name="Onboarding" component={Onboarding} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
