import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import arrow from "../images/arrow-left.png";
import logo from "../images/Logo.png";

export default function ProfileNavHeader() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backContainer}>
        <Image source={arrow} style={styles.backImage} />
      </Pressable>
      <Image source={logo} style={styles.logo} />
      <View style={styles.avatar}>
        <Text>av</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    resizeMode: "contain",
    height: 70,
    width: 200,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "black",
  },
  backContainer: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backImage: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
});
