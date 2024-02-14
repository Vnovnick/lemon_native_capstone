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
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 50,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 5,
    marginTop: 20,
  },
  headerTwo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 35,
    marginBottom: 25,
    marginLeft: "auto",
    marginRight: 25,
  },
  avatar: {
    height: 62,
    width: 62,
    borderRadius: 90,
    backgroundColor: "white",
  },
  changeButton: {
    backgroundColor: "#0a6035",
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  removeButton: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
});