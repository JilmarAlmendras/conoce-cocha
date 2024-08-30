import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Colors } from "@/constants/Colors";

const Categories = () => {
  return (
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
            <Text style={styles.categoryBtn}>Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Pueblitos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Iglesias</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Museos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Monumentos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Plazas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryBtn}>Areas verdes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
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
  },
  categoryBtnText: {
    color: Colors.black,
  },
  categoryBtnTextActive: {
    color: Colors.white,
  },
});
