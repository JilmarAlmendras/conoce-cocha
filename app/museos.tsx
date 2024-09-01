import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link, router, Stack } from "expo-router";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLugar } from "./LugarProvider";

const museos = () => {
  const headerHeight = useHeaderHeight();
  const { lugares, addToFavorite } = useLugar();
  const museos = lugares.filter((item) => item.categories.includes("museos"));

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <View>
                  <Feather name="arrow-left" size={28} />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
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
            </View>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.txtTitle}>Museos</Text>
        {/* desde aqui comienza los cards */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            {museos.map((item, index) => (
              <View style={styles.item} key={index}>
                <Link href={item.ruta as any} asChild>
                  <TouchableOpacity>
                    <Image source={{ uri: item.image }} style={styles.image} />
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocationTxt}>{item.location}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      addToFavorite(item.id);
                    }}
                  >
                    {item.favorito ? (
                      <FontAwesome5 color="red" name="gratipay" size={24} />
                    ) : (
                      <FontAwesome5 name="heart" size={24} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default museos;

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
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 320,
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
  txtTitle: {
    padding: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
