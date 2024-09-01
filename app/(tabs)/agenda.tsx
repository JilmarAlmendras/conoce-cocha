import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const agenda = () => {
  const headerHeight = useHeaderHeight();
  const handlePress = () => {
    Linking.openURL("https://maps.app.goo.gl/nkNBsGNeb414fXki8");
  };

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
        <Text style={styles.title}>Recomendaciones</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto - 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* otro */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* aqui */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cards}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Obra "Porque a mi?"
                  </Text>
                  <Text>15 de agosto 15:30</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={24}
                    color={Colors.primaryColor}
                  />
                  <Text style={{ width: 100 }}>Teatro Adela Zamudio</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={handlePress}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default agenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  cards: {
    flex: 1,
    gap: 30,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  goButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 12,
    padding: 6,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
