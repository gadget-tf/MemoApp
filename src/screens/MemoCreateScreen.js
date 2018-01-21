import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handleSubmit() {
    const db = firebase.firestore();
    const {currentUser} = firebase.auth();
    const uid = currentUser.uid;
    db.collection(`users/${uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    }).then((docRef) => {
      this.props.navigation.goBack();
    }).catch((error) => {
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => {this.setState({body: text})}}
          autoCorrect={false} />
        <CircleButton onPress={this.handleSubmit.bind(this)}>
        {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
