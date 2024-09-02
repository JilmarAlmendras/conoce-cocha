import React, { useState, useEffect } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const isLoged = Boolean(auth.currentUser);
  const headerHeight = useHeaderHeight();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      router.push("../signUpTrue"); // Redirigir
    } catch (error: any) {
      setLoading(false);
      console.log("Error code:", error.code);
      let errorMessage = "Ocurrió un error inesperado. Inténtalo nuevamente.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuario no encontrado.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Contraseña incorrecta.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Correo electrónico inválido.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Demasiados intentos fallidos. Inténtalo más tarde.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Error de red. Verifica tu conexión a internet.";
      }
      Alert.alert("Error de inicio de sesión", errorMessage);
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  return (
    <>
      {isLoged ? (
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
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.mainTitle}>CONOCE COCHA</Text>

            <TouchableOpacity
              onPress={() =>
                auth.signOut().then(() => {
                  router.push("/login");
                })
              }
              style={styles.logoutButton}
            >
              <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
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
            <Text style={styles.title}>Inicia sesión</Text>
            <Text style={styles.welcomeText}>
              Bienvenido a {"\n"}CONOCE COCHA
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#A9A9A9"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Contraseña"
                placeholderTextColor="#A9A9A9"
                autoCapitalize="none"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <FontAwesome5
                  name={passwordVisible ? "eye" : "eye-slash"}
                  size={24}
                  color="#A9A9A9"
                />
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={styles.signUpText}>¿No tienes una cuenta? </Text>

              <Link href="/signUpPage" asChild>
                <TouchableOpacity>
                  <Text style={styles.signUpLink}>Crea una cuenta</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default LoginPage;

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
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
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
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
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
