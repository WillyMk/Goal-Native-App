import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const ListComp = ({ list, handleDelete }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => {
        return (
          <View style={styles.listGoal}>
            <Pressable
              onPress={() => handleDelete(item.id)}
              android_ripple={{ color: "lightblue" }}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Text style={styles.txt}>{item.name}</Text>
            </Pressable>
          </View>
        );
      }}
      keyExtractor={(i, index) => i.id}
    />
  );
};
const styles = StyleSheet.create({
  listGoal: {
    backgroundColor: "indigo",
    borderRadius: 2,
    borderRadius: 5,
    margin: 7,
  },
  pressed: {
    opacity: 0.5,
  },
  txt: {
    textAlign: "center",
    color: "white",
    padding: 6,
  },
});
export default ListComp;
