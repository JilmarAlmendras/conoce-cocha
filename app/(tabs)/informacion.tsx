import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

const informacion = () => {
  const headerHeight = useHeaderHeight();

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
        <Text style={styles.title}>
          PUNTOS DE INFORMACIÓN TURÍSTICA EN COCHABAMBA
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.infoBox, styles.box1]}>
            <Text style={styles.number}>1</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>
                CENTRO DE INFORMACIÓN TURÍSTICA
              </Text>
              <Text style={styles.infoSubtitle}>
                (PASAJE SUCRE Y 25 DE MAYO)
              </Text>
              <Text style={styles.infoHours}>
                HORARIO: LUNES A VIERNES DE 08:00 A 12:00 Y DE 14:30 A 18:30
                HRS.
              </Text>
            </View>
          </View>

          <View style={[styles.infoBox, styles.box2]}>
            <Text style={styles.number}>2</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>CRISTO DE LA CONCORDIA</Text>
              <Text style={styles.infoHours}>
                HORARIO: LUNES A VIERNES DE 10:00 A 14:00 Y DE 14:30 A 18:00 /
                SÁBADOS Y DOMINGOS DE 11:00 A 15:00 HRS.
              </Text>
            </View>
          </View>

          <View style={[styles.infoBox, styles.box3]}>
            <Text style={styles.number}>3</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>TERMINAL DE BUSES COCHABAMBA</Text>
              <Text style={styles.infoHours}>
                HORARIO: LUNES A VIERNES DE 07:30 A 11:30 Y DE 17:30 A 22:30
                HRS.
              </Text>
            </View>
          </View>

          <View style={[styles.infoBox, styles.box4]}>
            <Text style={styles.number}>4</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>BOULEVARD DE LA RECOLETA</Text>
              <Text style={styles.infoHours}>
                HORARIO: MIÉRCOLES A SÁBADO DE 17:00 A 21:00 HRS.
              </Text>
            </View>
          </View>

          <View style={[styles.infoBox, styles.box5]}>
            <Text style={styles.number}>5</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>
                CENTRO DE INFORMACIÓN TURÍSTICA
              </Text>
              <Text style={styles.infoSubtitle}>(PRADO Y JOSE DE LA REZA)</Text>
              <Text style={styles.infoHours}>
                HORARIO: LUNES A VIERNES DE 08:00 A 12:00 Y DE 14:30 A 18:30
                HRS.
              </Text>
            </View>
          </View>

          <View style={[styles.infoBox, styles.box6]}>
            <Text style={styles.number}>6</Text>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>PLAZUELA DEL GRANADO</Text>
              <Text style={styles.infoHours}>
                HORARIO: LUNES A VIERNES DE 09:00 A 12:00 Y DE 14:00 A 18:30
                HRS.
              </Text>
            </View>
          </View>

          <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/512/6554/6554183.png",
            }}
            style={styles.logo}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default informacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 10,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoSubtitle: {
    fontSize: 14,
    fontStyle: "italic",
  },
  infoHours: {
    fontSize: 14,
    color: "black",
  },
  box1: {
    backgroundColor: "#f5a623",
  },
  box2: {
    backgroundColor: "#7ed321",
  },
  box3: {
    backgroundColor: "#d0021b",
  },
  box4: {
    backgroundColor: "#9013fe",
  },
  box5: {
    backgroundColor: "#b8e986",
  },
  box6: {
    backgroundColor: "#d0021b",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
  },
});
