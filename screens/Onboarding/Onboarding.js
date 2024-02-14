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
import logo from "../images/Logo.png";
import cook from "../images/cook.png";
import { styles } from "./onboardingStyles";
import { useState } from "react";
import { validateEmail, validateName } from "../utils/onboardingValidations";

export default function Onboarding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.headerOne}>Little Lemon</Text>
            <Text style={styles.headerTwo}>Chicago</Text>
            <Text
              style={{
                fontSize: 14,
                width: 160,
                marginTop: 10,
                color: "white",
              }}
            >
              We are a family owned Meditterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image source={cook} style={styles.bodyImage} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Pressable
          style={[
            styles.button,
            { opacity: validateEmail(email) && validateName(name) ? 1 : 0.5 },
          ]}
          disabled={!validateEmail(email)}
        >
          <Text style={{ fontSize: 24, color: "white" }}>Next</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
