import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import cook from "../images/cook.png";
import { styles } from "./homeStyles";
import { useContext, useState } from "react";
import { validateEmail, validateName } from "../utils/validations";
import { AppContext } from "../../AppContext";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setOnboardingComplete } = useContext(AppContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.body}>
          <View>
            <Text style={styles.headerOne}>Little Lemon</Text>
            <Text style={styles.headerTwo}>Chicago</Text>
            <Text style={styles.textBlock}>
              We are a family owned Meditterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image source={cook} style={styles.bodyImage} />
        </View>
        {isLoading && (
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 24, color: "white" }}>Loading...</Text>
          </Pressable>
        )}
        {!isLoading && (
          <Pressable
            style={[
              styles.button,
              { opacity: validateEmail(email) && validateName(name) ? 1 : 0.5 },
            ]}
            onPress={() => storeOnboardingData()}
            disabled={!validateEmail(email)}
          >
            <Text style={{ fontSize: 24, color: "white" }}>Next</Text>
          </Pressable>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
