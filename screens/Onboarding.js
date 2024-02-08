import { StyleSheet, View, Image } from "react-native";
import logo from "./images/Logo.png";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 300,
  },
  header: {},
});
