import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Page = () => {
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
        <Text style={styles.title}>Inicia sesión</Text>
        <Text style={styles.welcomeText}>Bienvenido a {"\n"}CONOCE COCHA</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <Link href="/signUpTrue" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.signUpText}>
          ¿No tienes una cuenta?{" "}
          <Link href="/signUpPage" asChild>
            <TouchableOpacity>
              <Text
                style={styles.signUpLink}
                //onPress={() => navigation.navigate("crear")}
              >
                Crea una cuenta
              </Text>
            </TouchableOpacity>
          </Link>
        </Text>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0047FF",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    //borderColor: "#DADADA",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor: "#1E90FF",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#0047FF",
    marginBottom: 30,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0047FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#000",
  },
  signUpLink: {
    color: "#0047FF",
    fontWeight: "bold",
  },
});
