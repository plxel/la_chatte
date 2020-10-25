import React, { useMemo } from "react";
import { Image, StyleSheet, FlatList } from "react-native";

import { Text, View } from "../components/Themed";
import { useAppContext } from "../contexts/useAppContext";

export default function CartScreen() {
  const { cart } = useAppContext();

  const groupedItems = useMemo(() => {
    return Object.values(
      cart.reduce((acc, item) => {
        if (!acc[item.id]) {
          acc[item.id] = { ...item, count: 0 };
        }
        acc[item.id].count++;
        return acc;
      }, {})
    );
  }, [cart]);

  const total = useMemo(() => {
    return groupedItems.reduce(
      (acc, item) => {
        acc.price += item.count * item.price;
        acc.count += item.count;
        return acc;
      },
      { price: 0, count: 0 }
    );
  }, [groupedItems]);

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image
        style={styles.menuItemImage}
        source={{ uri: "https://source.unsplash.com/random/200x200" }}
      />
      <View
        style={{ flex: 1, flexWrap: "wrap", justifyContent: "space-between" }}
      >
        <Text style={styles.menuItemTitle}>{item.name}</Text>
        <Text style={styles.menuItemPrice}>{item.price}₽</Text>
      </View>
    </View>
  );

  if (groupedItems.length === 0) {
    return <View style={styles.container}>The cart is empty</View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedItems}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
      <View style={styles.summary}>
        <Text>Total: {total.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  menuItem: {
    padding: 15,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuItemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  summary: {
    width: "100%",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
