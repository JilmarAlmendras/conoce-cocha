import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useLugar } from "../LugarProvider";

const { width } = Dimensions.get("window");

const likes = () => {
  const headerHeight = useHeaderHeight();
  const { lugares, addToFavorite } = useLugar();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Image
                source={{
                  uri: "https://www.myiconstory.com/wp-content/uploads/2018/06/Cochabamba-Cristo-de-la-concordia.png",
                }}
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>CONOCE COCHA</Text>
            </View>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.title}>Favoritos</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cards}>
            {lugares
              .filter((item) => item.favorito)
              .map((item, index) => (
                <View style={styles.item} key={index}>
                  <Link href="/villaTunari" asChild>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  </Link>
                  <Text
                    style={styles.itemTxt}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <View style={styles.itemFooter}>
                    <View style={styles.itemLocation}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color={Colors.primaryColor}
                      />
                      <Text style={styles.itemLocationTxt}>
                        {item.location}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        addToFavorite(item.id);
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
};

export default likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerLeft: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
  },
  headerImage: {
    width: 64,
    height: 64,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  cards: {
    flex: 1,
    gap: 30,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: width * 0.9,
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
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  itemLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemLocationTxt: {
    fontSize: 16,
    marginLeft: 10,
  },
});
