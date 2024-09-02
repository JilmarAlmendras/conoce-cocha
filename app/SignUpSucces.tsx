import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, Stack } from "expo-router";

const SignUpSuccess = () => {
  const router = useRouter();

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
                paddingTop: 20,
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

      <View style={styles.container}>
        <Text style={styles.title}>¡Cuenta creada con éxito!</Text>
        <Text style={styles.message}>
          Tu cuenta ha sido creada exitosamente.{"\n"}Por favor, inicia sesión
          para continuar.
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("./(tabs)/login")}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0047FF",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0047FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
