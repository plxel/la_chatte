import * as React from "react";
import { StyleSheet, Image, Button } from "react-native";

import { Text, View } from "../components/Themed";

export default function ItemScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://source.unsplash.com/random/400x400" }}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.price}₽</Text>
      <Text style={styles.descr}>{item.descr}</Text>

      <Button
        title="Add to cart"
        accessibilityLabel="Add item to cart"
        onPress={() => {
          /* TODO */
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  descr: {
    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
