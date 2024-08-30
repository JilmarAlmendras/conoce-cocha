import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";

import { Link, Stack } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();

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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="search" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        {/* desde aqui comienza los botonoes de las categorias */}
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={styles.containerBtn}>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Pueblitos</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Iglesias</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Museos</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Monumentos</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Plazas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoryBtn}>Areas verdes</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* desde aqui comienza los cards */}
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Link href="/villaTunari" asChild>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Image
                    source={{
                      uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                    }}
                    style={styles.image}
                  />
                  <Text
                    style={styles.itemTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Villa Tunari
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
                        Carretera a Chapare
                      </Text>
                    </View>
                    <FontAwesome5 name="heart" size={24} />
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

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
    marginBottom: 20,
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
});
