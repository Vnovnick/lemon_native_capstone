import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "./screens/Profile/Profile";
import ProfileNavHeader from "./screens/Profile/ProfileNavHeader";
import OnboardingNavHeader from "./screens/Onboarding/OnboardingNavHeader";
import { AppContext } from "./AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const email = await AsyncStorage.getItem("email");
        setOnboardingComplete(!!email);
      } catch (error) {
        console.log("get async val error", error);
      }
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <AppContext.Provider value={{ onboardingComplete, setOnboardingComplete }}>
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
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{
                header: () => <OnboardingNavHeader />,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
