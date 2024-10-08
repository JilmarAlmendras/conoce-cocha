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
  
  const punata = () => {
    const handlePress = () => {
      Linking.openURL("https://maps.app.goo.gl/H4NbwHi8KfG2fZu56");
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
          <Text style={styles.title}>Punata</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mipuna.jpg/600px-Mipuna.jpg",
              }}
              style={styles.mainImage}
            />
  
            <Text style={styles.description}>
            Conocida cariñosamente como la “Perla del Valle Bajo,” es un lugar donde la tradición y 
            la modernidad se encuentran en un entorno rural encantador. Este pueblo es famoso por su agricultura, 
            siendo uno de los principales productores de maíz y otros cultivos en la región. 
            </Text>
  
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.goButton} onPress={handlePress}>
                <Text style={styles.goButtonText}>ubicación</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  };
  
  export default punata;
  
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
  