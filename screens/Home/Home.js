import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import cook from "../images/cook.png";
import { styles } from "./homeStyles";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { menuDataUrl } from "./apiDefinitions";
import MenuItem from "./MenuItem";
import { createTable, getMenuItems, saveMenuItems } from "../../database";
import { capitalizeFirstLetter } from "../utils/validations";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [menuData, setMenuData] = useState([]);
  const { setOnboardingComplete } = useContext(AppContext);
  const categories = ["starters", "mains", "desserts", "drinks", "specials"];

  const fetchData = async () => {
    let fetchedData = [];
    try {
      const res = await fetch(menuDataUrl);
      fetchedData = await res.json();
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    return fetchedData;
  };

  useEffect(() => {
    (async () => {
      try {
        await createTable();
        let menuItems = await getMenuItems();

        if (!menuItems.length) {
          const menuItems = await fetchData();
          console.log("fetched data", menuItems.menu);
          saveMenuItems(menuItems.menu);
        }
        menuItems = await getMenuItems();
        setMenuData(menuItems);
      } catch (e) {
        console.log("error saving data in db", e);
      }
    })();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
      <View style={{ height: 80, alignSelf: "flex-start", paddingLeft: 15 }}>
        <Text style={styles.deliveryHeader}>ORDER FOR DELIVERY!</Text>
        <ScrollView horizontal contentContainerStyle={styles.catScroll}>
          {categories.map((cat) => (
            <Pressable key={cat} style={styles.catButton}>
              <Text style={styles.catButtonText}>
                {capitalizeFirstLetter(cat)}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        contentContainerStyle={{ alignItems: "stretch", paddingHorizontal: 15 }}
        data={menuData}
        renderItem={({ item }) => <MenuItem data={item} />}
        keyExtractor={(item) => item.name}
      />
    </KeyboardAvoidingView>
  );
}
