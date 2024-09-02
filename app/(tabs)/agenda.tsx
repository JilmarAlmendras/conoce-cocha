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
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
            {/* Repite el bloque anterior para cada evento */}
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
                    uri: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/448776921_892758566230827_6346414465335715834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1c8zbMLNoTYQ7kNvgG71733&_nc_ht=scontent.fcbb2-2.fna&oh=00_AYB31qt2L2rjOOaX4zE-M4SJAElk28GVBKJcZSzCVUUT8Q&oe=66DB1E4F",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.itemContent}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemTitle}>Campaña de vacunación</Text>
                  <Text style={styles.itemTitle}>Antirrábica</Text>
                  <Text style={styles.itemDate}>
                    29 y 30 de septiembre - 15:00 h
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
                      Plaza de las Banderas
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
    gap: 30,
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
    width: 100,
    height: 100,
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
