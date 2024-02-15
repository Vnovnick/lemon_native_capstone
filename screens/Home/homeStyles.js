import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    backgroundColor: "black",
    width: "100%",
    height: 280,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerOne: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  headerTwo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  textBlock: {
    fontSize: 14,
    width: 160,
    marginTop: 10,
    color: "white",
  },
  bodyImage: {
    width: 130,
    height: "auto",
    resizeMode: "contain",
  },
  catScroll: {
    columnGap: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  catButton: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  catButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  deliveryHeader: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
  },
});
