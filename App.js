import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavitator } from 'react-navigation';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StackNavigator from 'react-navigation/src/navigators/StackNavigator';

const App = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  Home: { 
    screen: MemoListScreen,
  },
  MemoDetail: {
    screen: MemoDetailScreen,
  },
  MemoEdit: {
    screen: MemoEditScreen,
  },
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  },
});

export default App;