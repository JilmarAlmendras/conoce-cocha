import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ContentCategories = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={{
              uri: "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
            Villa Tunari
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
              <Text style={styles.itemLocationTxt}>Carretera a Chapare</Text>
            </View>
            <FontAwesome5 name="heart" size={24} />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContentCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
});
