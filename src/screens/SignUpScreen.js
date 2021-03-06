import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'})
          ]
        })
        this.props.navigation.dispatch(resetAction);
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({email: text})}}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email Address" />
        <TextInput style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({password: text})}}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password" />
        <TouchableHighlight underlayColor='#C71676' style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>送信する</Text>
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

export default SignUpScreen;
