import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavitator } from 'react-navigation';
import firebase from 'firebase';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StackNavigator from 'react-navigation/src/navigators/StackNavigator';

import ENV from './Env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID
};
firebase.initializeApp(config);

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