import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

import CircleButton from '../elements/CircleButton';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value='Email Address' />
        <TextInput style={styles.input} value='Password' />
        <TouchableHighlight style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#ccc',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  }
});

export default LoginScreen;
