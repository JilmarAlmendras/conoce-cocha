import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const agenda = () => {
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
            <View style={styles.headerLeft}>
              <Image
                source={{
                  uri: "https://www.myiconstory.com/wp-content/uploads/2018/06/Cochabamba-Cristo-de-la-concordia.png",
                }}
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>CONOCE COCHA</Text>
            </View>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.title}>Recomendaciones</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            {/* Evento */}
            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/455890393_545898531106206_3084562107556521222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7F3MTVDA5OgQ7kNvgHaWMCV&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDXC2JpkqgovnguHmwQqvuM2r7HDXJY_lpVRerUxk0vNA&oe=66DBDFB5",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>
                    Tour "Conociendo la Fábrica de{" "}
                  </Text>
                  <Text style={styles.itemTitle}>Instrumentos Gamboa"</Text>
                  <Text style={styles.itemDate}>23 de Agosto - 15:00 h</Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Plaza de las Banderas
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/6CXcU7vxLxuRR57x9")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/457277058_551518630544196_3744517209363055820_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K49l0GNIIa8Q7kNvgEwVokD&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYCwOJPjs-0tLZTDvCRCtt_VyvsrCQebKfigxtdMZxrCpw&oe=66DBE0B6",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Tour Místico</Text>
                  <Text style={styles.itemDate}>30 de Agosto - 18:00 h</Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Colina San Sebastián
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/HE4rzr9NtYiBcxRU8")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://cultura.patino.org/storage/activities/01J6SJ4MK3XZPEC901SBVZZ3ZS.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>
                    Exposición: Mirar para Volar
                  </Text>

                  <Text style={styles.itemDate}>
                    01 hasta 22 de Septiembre - 10:00 h
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Centro de Exposiciones del Palacio Portales
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/CcwaEjMoF1tXXTfm7")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/457902971_527788419909154_8026049652783048604_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=isq20sAUunsQ7kNvgHI-ln7&_nc_ht=scontent.fcbb2-2.fna&_nc_gid=AI8kPYwbGe6QOLikgXXiwGl&oh=00_AYCVp81TXyqI9cB8ixagZxWKeVCiF7h3NXyJbq-FjQKjTg&oe=66DBC219",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>
                    Concurso de grupos musicales{" "}
                  </Text>
                  <Text style={styles.itemTitle}>emergentes</Text>
                  <Text style={styles.itemDate}>05 de Septiembre</Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>Casa de la cultura</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/WYiNmHVVkK7xfhqb7")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://cultura.patino.org/storage/activities/01J6SMQARSAM1Y701W3WJ2K967.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}></Text>
                  <Text style={styles.itemTitle}>Concierto Radio Cutipa</Text>
                  <Text style={styles.itemDate}>
                    13 de Septiembre - 19:30 h
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Teatro al aire libre del Palacio Portales
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/CcwaEjMoF1tXXTfm7")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/457698125_846538850916612_2933959160802573997_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=VHpfMy2nQOQQ7kNvgGwG-DB&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYCkBF7mfF69VMXAUzFjH_XRFMisu6zO8kCEPJXCJziOFg&oe=66DBDE62",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Taller pinta tu maceta</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    13 de Septiembre - 14:00 a 17:30
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>Stones restobar</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/XnhC26SzKkLBiiE39")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://cultura.patino.org/storage/activities/01J6SK9KHEBV982M7T91GMZMBX.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>
                    Iauguración: XIII Taller{" "}
                  </Text>
                  <Text style={styles.itemTitle}>Internacional de Guión</Text>
                  <Text style={styles.itemDate}>
                    14 de septiembre - 09:30 h
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Salón Principal del Palacio Portales
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/CcwaEjMoF1tXXTfm7")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t45.1600-4/457617204_6612696698090_6612615099074031286_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=103&ccb=1-7&_nc_sid=c02adf&_nc_ohc=0c81IflAOwkQ7kNvgFagMMH&_nc_ht=scontent.fcbb2-2.fna&_nc_gid=ANem3e3jC74g9UjlLoAjxgt&oh=00_AYAuhau2RDnbTaimCAGITSg2pZ1X_OcF6GgFZhaXvjio6Q&oe=66DBFB32",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Regresa ¡ENOJADO! </Text>
                  <Text style={styles.itemTitle}>una obra de teatro</Text>
                  <Text style={styles.itemDate}>
                    19 de Septiembre - 19:00 h
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>
                      Teatro: Adela Zamudio
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/85aDQXDcEysYo7dq8")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* otro */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://cultura.patino.org/storage/activities/01J6SMYD9HFH8X6BK955YKVYTX.jpg",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>
                    El Palacio Suena: Villa Albina,
                  </Text>
                  <Text style={styles.itemTitle}>El valle soñado</Text>
                  <Text style={styles.itemDate}>25 Septiembre</Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>Villa Albina</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/7iAfXYXwPQTvxxb29")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/457369028_552336103795782_6223122503433171731_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fkUdGezBpPcQ7kNvgFoyoC2&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYBFiXnibgl2o1RyxXRun4sNJhYGKiXCKKx6FmbdkluRtw&oe=66DBCDD3",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Primer desfile de autos</Text>
                  <Text style={styles.itemTitle}>clásicos, antiguos </Text>
                  <Text style={styles.itemDate}>
                    28 de septiembre - 14:30 h
                  </Text>
                </View>
                <View style={styles.itemFooter}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocation}>Cine Center</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() =>
                      handlePress("https://maps.app.goo.gl/6fRCL5KkY2iDmjnL6")
                    }
                  >
                    <Text style={styles.goButtonText}>Ir</Text>
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
  headerLeft: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
  },
  headerImage: {
    width: 64,
    height: 64,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    padding: 16,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  cards: {
    flex: 1,
    gap: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: "center",
  },
  imageContainer: {
    paddingTop: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  itemContent: {
    flexDirection: "column",
    flex: 1,
    paddingLeft: 10,
  },
  itemTextContainer: {
    padding: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 8,
  },
  itemDate: {
    fontSize: 12,
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
  },
  itemLocation: {
    width: 100,
    fontSize: 12,
  },
  goButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 12,
    padding: 8,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  goButtonText: {
    color: Colors.white,
  },
});
