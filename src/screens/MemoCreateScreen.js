import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handleSubmit() {
    const {params} = this.props.navigation.state;
    const db = firebase.firestore();
    const uid = params.currentUser.uid;
    db.collection(`users/${uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    }).then((docRef) => {
    }).catch((error) => {
    });
    this.props.navigation.goBack();
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
