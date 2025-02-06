// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import TodoProvider from './contexts/TodosContext';

import Home from './screens/Home';
import Details from "./screens/Details";
import Create from "./screens/Create";

import Button from './components/Button';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Todos",
        headerRight: () => {
          const navigation = useNavigation();
          return <Button title="+" onPress={() => navigation.navigate("Create")} />
        }
      }
    },
    Details,
    Create
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <TodoProvider>
      <Navigation />
    </TodoProvider>
  );
}