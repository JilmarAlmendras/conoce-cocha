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
import { Stack, useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const vinto = () => {
  const handlePress = () => {
    Linking.openURL("https://maps.app.goo.gl/hf7GkqjA5R4N99Tx6");
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
        <Text style={styles.title}>Vinto</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/shUrNYuhBHY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGGUgWihTMA8=&rs=AOn4CLAwpkq_RkWcIN15ZF9cXE0nlSNuCw",
            }}
            style={styles.mainImage}
          />
          <Image
            source={{
              uri: "https://dondebolivia.com/wp-content/uploads/31080605.jpg",
            }}
            style={styles.mainImage}
          />

          <Text style={styles.description}>
            Es un pueblo que combina lo mejor de la modernidad y la tradición en
            un entorno acogedor. Conocido por sus festividades y su producción
            de frutas frescas, Vinto es un lugar donde los visitantes pueden
            disfrutar de la calidez de la comunidad local mientras exploran sus
            mercados y plazas llenas de vida.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.goButton} onPress={handlePress}>
              <Text style={styles.goButtonText}>ubicación</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default vinto;

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
