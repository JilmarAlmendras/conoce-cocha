import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const villaroel = () => {
  const handlePress = () => {
    Linking.openURL("https://maps.app.goo.gl/xmESDVcMP6noGP3j7");
  };

  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View>
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

      <View style={styles.container}>
        <Text style={styles.title}>Monumento a Gualberto Villarroel</Text>
        <Image
          source={{
            uri: "https://assets.isu.pub/document-structure/200301205022-a4c1af5bee7f42cf95de5e328d27e5ac/v1/91439035b64462d574201176592c05fe.jpg",
          }}
          style={styles.mainImage}
        />
        <Text style={styles.description}>
        Gualberto Villarroel López (Muela (hoy Villa Rivero), 15 de diciembre de 1908-La Paz, 
        Bolivia, 21 de julio de 1946) fue un militar, político boliviano.
          Este monumento honra al expresidente boliviano Gualberto Villarroel,
          que fue una figura clave en la historia del país.

        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.goButton} onPress={handlePress}>
            <Text style={styles.goButtonText}>ubicación</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default villaroel;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  mainImage: {
    width: "100%",
    height: 280,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#4f4f4f",
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#555",
    borderRadius: 8,
    padding: 12,
    width: "45%",
    justifyContent: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
  goButton: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    padding: 12,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  goButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
