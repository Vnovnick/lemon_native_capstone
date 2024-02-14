import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Platform,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { styles } from "./profileStyles";

export default function Profile() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.body}>
          <Text style={styles.headerTwo}>Personal Information</Text>
          <View>
            <Text style={styles.label}>Avatar</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 20,
              }}
            >
              <View style={styles.avatar}></View>
              <Pressable style={styles.changeButton}>
                <Text style={{ fontSize: 14, color: "white" }}>Change</Text>
              </Pressable>
              <Pressable style={styles.removeButton}>
                <Text style={{ fontSize: 14, color: "black" }}>Remove</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={{ fontSize: 24, color: "white" }}>Next</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
