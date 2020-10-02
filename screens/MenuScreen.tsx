import * as React from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const menuItems = [
  {
    id: 1,
    group: 'Завтраки',
    name: 'Сырники со сметаной или вареньем',
    price: 240,
    descr: '',
  },
  {
    id: 2,
    group: 'Завтраки',
    name: 'Тосты с лососем, сливочным сыром и яйцом',
    price: 260,
    descr: '',
  },
  {
    id: 3,
    group: 'Завтраки',
    name: 'Омлет с сулугуни, свежим шпинатом и томатами черри',
    price: 280,
    descr: '',
  },
  {
    id: 4,
    group: 'Завтраки',
    name: 'Ирландский завтрак',
    price: 280,
    descr: 'Омлет со сладким перцем, куриным филе и цукини. Подается с хрустящим тостом',
  },
  {
    id: 5,
    group: 'Завтраки',
    name: 'Итальянский завтрак',
    price: 260,
    descr: 'Омлет с сыром, беконом, шампиньонами, луком порей и томатами черри. Подается с хрустящим тостом',
  },
  {
    id: 6,
    group: 'Завтраки',
    name: 'Овсяная каша с медом, яблоком и корицей на кокосовом молоке',
    price: 200,
    descr: '',
  },
  {
    id: 7,
    group: 'Завтраки',
    name: 'Ржаная каша с черникой и миндалем',
    price: 200,
    descr: '',
  },
  {
    id: 8,
    group: 'Закуски',
    name: 'Нежные кусочки судака в хрустящем пивном тесте',
    price: 330,
    descr: '',
  },
]

export default function TabOneScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image style={styles.menuItemImage} source={{ uri: "https://source.unsplash.com/random/200x200" }} />
      <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Text style={styles.menuItemTitle}>{item.name}</Text>
        <Text style={styles.menuItemPrice}>{item.price}₽</Text>
      </View>
      
  </View>
  )
  return (
    <View style={styles.container}>
      <FlatList data={menuItems} renderItem={renderItem} keyExtractor={item => `${item.id}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  menuItem: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  menuItemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  }
});
