import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useLugar } from "../LugarProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebaseConfig";
export default function home() {
  const headerHeight = useHeaderHeight();
  const { lugares, filterLugarByName, addToFavorite } = useLugar();
  const [searchText, setSearchText] = useState("");

  const filteredData =
    searchText.length > 0 ? lugares.filter((item) => item.filtrado) : lugares;

  // Obtén el estado de autenticación del usuario
  const [user] = useAuthState(auth);

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
        {/* Campo de búsqueda */}
        <TextInput
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            filterLugarByName(text);
          }}
          placeholder="Buscar..."
          style={{
            borderColor: Colors.black,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            backgroundColor: Colors.white,
          }}
        />

        {/* Botones de las categorías */}
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <View style={styles.containerBtn}>
              <TouchableOpacity>
                <Text style={styles.categoryBtnActive}>Todo</Text>
              </TouchableOpacity>
              <Link href="/pueblos" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Pueblos</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/iglesias" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Iglesias</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/museos" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Museos</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/monumentos" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Monumentos</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/plazas" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Plazas</Text>
                </TouchableOpacity>
              </Link>
              <Link href="/verdes" asChild>
                <TouchableOpacity>
                  <Text style={styles.categoryBtn}>Áreas verdes</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </ScrollView>
        </View>
        {/* Lista filtrada de cards */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            {filteredData.map((item, index) => (
              <View style={styles.item} key={index}>
                <Link href={item.ruta as any} asChild>
                  <TouchableOpacity>
                    <Image source={{ uri: item.image }} style={styles.image} />
                  </TouchableOpacity>
                </Link>
                <Text
                  style={styles.itemTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 50,
                    justifyContent: "space-between",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={Colors.primaryColor}
                    />
                    <Text style={styles.itemLocationTxt}>{item.location}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if (user) {
                        addToFavorite(item.id);
                      } else {
                        Alert.alert(
                          "Inicie sesión",
                          "Debe iniciar sesión para darle me gusta."
                        );
                      }
                    }}
                  >
                    {item.favorito ? (
                      <FontAwesome5
                        color="#a80100"
                        name="heart"
                        solid
                        size={24}
                      />
                    ) : (
                      <FontAwesome5 name="heart" size={24} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerBtn: {
    flexDirection: "row",
    gap: 10,
  },
  categoryBtn: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    color: Colors.white,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 320,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  itemTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemLocationTxt: {
    fontSize: 16,
    marginLeft: 10,
  },
  cards: {
    flex: 1,
    gap: 30,
    paddingBottom: 20,
  },
});
