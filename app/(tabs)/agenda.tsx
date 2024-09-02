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
  // Función que abre el link recibidoa
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
                      {/* Noveno evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
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
                    Campaña de vacunación
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Antirrábica
                  </Text>
                  <Text>29 y 30 de septiembre - 15:00 h </Text>
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
                  <Text style={{ width: 100 }}>Plaza de las Banderas</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/85aDQXDcEysYo7dq8")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
                     {/* Septimo evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/451231628_906887818151235_3968289493187222247_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=whzhRJoIbGgQ7kNvgEQ_QAM&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYBL65mXPoV7i1qgZQCWflXAcP8k3SLsSTuu1791IPSMrQ&oe=66DB22A4",
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
                    Taller de Grabado
                  </Text>
                  <Text>15 al 17 de septiembre - 9:00 h</Text>
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
                  <Text style={{ width: 100 }}>Museo Casona Santivañez</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/dPkJmuwvXKYK8ZRW7")}
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
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/455265172_926161029557247_2205814381718618523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Rv4CVnAjxWsQ7kNvgF_c0Z3&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDO-MJehqxfLcI-IOWI7ncS0REssXK_7klhIIYScLh2Kg&oe=66DAF9E6",
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
                    Villa de Oropesa
                  </Text>
                  <Text>15 de septiembre - 15:00 h</Text>
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
                  <Text style={{ width: 100 }}>Plaza 14 de Septiembre</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/7BHX2A42wWZqtbFd8")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        
          {/* Tercero evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/454591529_923650873141596_2383662257924248917_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=maFeoyJP1CIQ7kNvgEfcwwC&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDBqyt4ij5cq7vqwIcDbMLsq382WBtnAZQyWw0hWHVWJA&oe=66DAFEAE",
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
                    Paseo de la Alameda
                  </Text>
                  <Text>11 de septiembre - 09:00 h</Text>
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
                  <Text style={{ width: 100 }}>Av. Ballivián (Prado)</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/oFornXcehx88DDSE8")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          
          
          {/* Quinto evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/366380340_690452643128088_8250296273098824534_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c9AgVEWSAT0Q7kNvgG2-SXd&_nc_ht=scontent.fcbb2-1.fna&oh=00_AYDG0v9RNMIRJ5ZXShD0F72F9O1Yx5omvHG_Tmi3lOFRBg&oe=66DB0FC4",
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
                    Festival Gastronómico 
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    de Antaño
                  </Text>
                  <Text>11 de septiembre - 10:00 h</Text>
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
                  <Text style={{ width: 100 }}>Plaza de las Banderas</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/85aDQXDcEysYo7dq8")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
            {/* Cuarto evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/454446514_922097773296906_6704812162638829759_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QJ91m7SLIIYQ7kNvgHhDMew&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYDrAcyhbBkEVDWSNxJUr0BisLIfWFN4w_mDwB5A6xPuJg&oe=66DB207E",
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
                    Festival Chaqueño
                  </Text>
                  <Text>10 de septiembre - 12:00 h</Text>
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
                  <Text style={{ width: 100 }}>Casa Grande</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/Eg3HjpFo1kuApKib8")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
            {/* Decimo evento */}
            <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448061908_881919223981428_5871725341580897547_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AORQP2EM1l0Q7kNvgH_NGs7&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYDRaj64japmqT4srf1ky9-zE418riEIFV_M-ftomUE0Bw&oe=66DB132E",
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
                    Cocha Drift
                  </Text>
                  <Text>9 de septiembre - 14:00 h</Text>
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
                  <Text style={{ width: 100 }}>Fexco Arena</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/SVwk9sfo6X5WuYkD7")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* Octavo evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/449921342_902638295242854_2691401598128660150_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_S_tlDGdnkAQ7kNvgFp1wbw&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYACh_WpeQlo4XilckN5jrVVrrsYVcYj3oi1tq0EX_OP8g&oe=66DAFEA0",
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
                    Antigua Ermita de
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    San Sebastián
                  </Text>
                  <Text>9 de septiembre - 18:30 h</Text>
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
                  <Text style={{ width: 100 }}>Colina San Sebatián</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/rrWwro2Yz4PE3NzD9")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* Sexto evento */}
          <View style={styles.cards}>
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/453654189_918960960277254_2135234973165112973_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KiLcPcHaEXsQ7kNvgHIl9RT&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYA9F2IKw2FYkNioY-v7YcAQvQF7MFifiIo0pLB-2WPQuw&oe=66DAF959",
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
                    Feria de los Picantes 
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      paddingBottom: 8,
                    }}
                  >
                    Sopa de Mani
                  </Text>
                  <Text>4 de septiembre - 10:00 h</Text>
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
                  <Text style={{ width: 100 }}>Av. Beijing y Av. Victor Ustariz</Text>
                  <TouchableOpacity
                    style={styles.goButton}
                    onPress={() => handlePress("https://maps.app.goo.gl/u81SvXwEz563dhnd9")}
                  >
                    <Text style={{ color: Colors.white }}>Ir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
            {/* Primer evento */}
            <View style={styles.item}>
              <View style={{ paddingTop: 10 }}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/457186627_937609438412406_6003942543541605732_n.jpg?nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kz67VcycmxgQ7kNvgHZz2F&_nc_ht=scontent.fcbb2-1.fna&_nc_gid=AkW5CMRKxxlnXFHy29kImgs&oh=00_AYCrQCng1ZNieVlfAWGpgYCYuIHdkd7wQ21kdlrtsd_s6g&oe=66DB0BC5",
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
                  <Text>2 de septiembre - 19:00 a 20:30 h</Text>
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
                    onPress={() => handlePress("https://maps.app.goo.gl/PnWTf4mUdr8qtsbc8")}
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