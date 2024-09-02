import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const index = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <View style={styles.gradientBackground}>
          <Text style={styles.title}>CONOCE COCHA</Text>
          <Text style={styles.subtitle}>
            Guía turística para descubrir Cochabamba
          </Text>

          <Image
            source={{
              uri: "https://www.myiconstory.com/wp-content/uploads/2018/06/Cochabamba-Cristo-de-la-concordia.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />

          <Link href="/(tabs)/login" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002e6d", // Azul oscuro para el fondo de la pantalla
  },
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "linear-gradient(180deg, #0044cc, #00aaff)", // Gradiente manual
  },
  title: {
    color: "#fff",
    fontSize: 36, // Título más grande
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#d0e1f9",
    fontSize: 22, // Subtítulo más grande
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    width: 300, // Imagen más grande
    height: 300,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#0044cc",
    paddingVertical: 15,
    paddingHorizontal: 40, // Botón más ancho
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
