import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, Platform } from "react-native";

export default function Profile() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text>Profile Page</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
