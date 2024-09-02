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
  // Función que abre el link recibido
  const headerHeight = useHeaderHeight();

  const handlePress = (url: string) => {
    Linking.openURL(url);
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
            {/* Primer evento */}
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/457186627_937609438412406_6003942543541605732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kz67VcycmxgQ7kNvgHZz2F_&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDE_rtGAEOua9a9Hhik1GWHwv54OJ9UumT03fk1pGP3rg&oe=66DB0BC5",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Noches de Arte
                  </Text>
                  <Text>2 de septiembre - 19:00 a 20:30</Text>
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
                  <Text style={{ width: 100 }}>Pasaje de la catedral</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/PnWTf4mUdr8qtsbc8")
                    }
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Segundo evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/457186627_937609438412406_6003942543541605732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kz67VcycmxgQ7kNvgHZz2F_&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDE_rtGAEOua9a9Hhik1GWHwv54OJ9UumT03fk1pGP3rg&oe=66DB0BC5",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ padding: 8 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Concierto Acústico
                  </Text>
                  <Text>3 de septiembre - 18:00 a 20:00</Text>
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
                  <Text style={{ width: 100 }}>Plaza de Armas</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/rCLj5rTZfcK4mQYHA")
                    }
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
    padding: 8,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
});
