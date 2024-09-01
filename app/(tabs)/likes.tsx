import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useLugar } from "../LugarProvider";

const likes = () => {
  const headerHeight = useHeaderHeight();
  const { lugares } = useLugar();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                marginLeft: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: "https://www.myiconstory.com/wp-content/uploads/2018/06/Cochabamba-Cristo-de-la-concordia.png",
                }}
                style={{ width: 64, height: 64 }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                CONOCE COCHA
              </Text>
            </View>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.title}>Favoritos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            {lugares
              .filter((item) => item.favorito)
              .map((item, index) => (
                <View style={styles.item} key={index}>
                  <Link href="/villaTunari" asChild>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  </Link>
                  <Text
                    style={styles.itemTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 50,
                      justifyContent: "space-between",
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingBottom: 10,
                      paddingTop: 10,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color={Colors.primaryColor}
                      />
                      <Text style={styles.itemLocationTxt}>
                        {item.location}
                      </Text>
                    </View>
                    <FontAwesome5 color="red" name="gratipay" size={24} />
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerBtn: {
    flexDirection: "row",
    gap: 10,
  },
  categoryBtn: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    color: Colors.white,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 320,
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  itemTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemLocationTxt: {
    fontSize: 16,
    marginLeft: 10,
  },
  cards: {
    flex: 1,
    gap: 30,
    paddingBottom: 20,
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
