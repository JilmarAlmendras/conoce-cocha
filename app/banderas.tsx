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

const banderas = () => {
  const handlePress = () => {
    Linking.openURL("https://maps.app.goo.gl/cGpSS6SzxHfyf5YJ8");
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
        <Text style={styles.title}>Plaza de las Banderas</Text>
        <Image
          source={{
            uri: "https://as1.ftcdn.net/v2/jpg/01/79/99/66/1000_F_179996670_glZxlTO8viCNRMdGpwEmhmxcO32He4lB.jpg",
          }}
          style={styles.mainImage}
        />
        <Text style={styles.description}>
        La Plaza de las Banderas está ubicada entre el final de la Av. Ballivián, 
        también conocida como El Prado, y el puente Cala-Cala, esta plaza representa 
        la unión de los pueblos americanos, luciendo las banderas de cada uno de ellos.
         También posee la fuente Carlos Montenegro que representa “La diversidad en equilibrio”,
          del artista boliviano Andrés Gavilano.


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

export default banderas;

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
