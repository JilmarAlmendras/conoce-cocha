import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import {} from "./(tabs)/login";

const signUpTrue = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.myiconstory.com/wp-content/uploads/2018/06/Cochabamba-Cristo-de-la-concordia.png",
          }}
          style={styles.mainImage}
        />
        <Text style={styles.welcomeText}>Bienvenido</Text>
        <Text style={styles.mainTitle}>CONOCE COCHA</Text>

        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart" size={20} color="#FF0000" />
          <Text style={styles.favoriteButtonText}>Ver Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default signUpTrue;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 32,
    color: "#0047FF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },
  favoriteButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0047FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  favoriteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  logoutButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4f4f4f",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
