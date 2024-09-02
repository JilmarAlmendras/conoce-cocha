import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      router.push("/SignUpSucces"); // Redirigir
    } catch (error: any) {
      setLoading(false);
      let errorMessage = "Ocurrió un error inesperado. Inténtalo nuevamente.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este correo ya está en uso.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Correo electrónico inválido.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "La contraseña es demasiado débil.";
      }
      Alert.alert("Error de creación de cuenta", errorMessage);
    }
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
        <Text style={styles.title}>Crea una cuenta</Text>
        <Text style={styles.welcomeText}>Bienvenido a {"\n"}CONOCE COCHA</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          disabled={loading}
        >
          <Text style={styles.signUpButtonText}>
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={styles.signInText}>¿Ya tienes una cuenta? </Text>

          <Link href="/(tabs)/login" asChild>
            <TouchableOpacity>
              <Text style={styles.signInLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
};

export default SignUpPage;

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
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor: "#1E90FF",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0047FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    color: "#000",
  },
  signInLink: {
    color: "#0047FF",
    fontWeight: "bold",
  },
});
