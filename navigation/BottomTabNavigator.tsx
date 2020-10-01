import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Menu"
        component={MenuTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MenuTabStack = createStackNavigator<TabOneParamList>();

function MenuTabNavigator() {
  return (
    <MenuTabStack.Navigator>
      <MenuTabStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerTitle: 'Menu' }}
      />
    </MenuTabStack.Navigator>
  );
}

const CartTabStack = createStackNavigator<TabTwoParamList>();

function CartTabNavigator() {
  return (
    <CartTabStack.Navigator>
      <CartTabStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerTitle: 'Cart' }}
      />
    </CartTabStack.Navigator>
  );
}
