import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({body: params.memo.body});
    this.setState({key: params.memo.key});
  }

  handleSubmit() {
    const newDate = new Date();
    const db = firebase.firestore();
    const {currentUser} = firebase.auth();
    const uid = currentUser.uid;
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key).update({
      body: this.state.body,
      createdOn: newDate,
    }).then((docRef) => {
      const {navigation} = this.props;
      navigation.state.params.returnMemo({
        body: this.state.body,
        key: this.state.key,
        createdOn: newDate,
      });
      navigation.goBack();
    }).catch((error) => {
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput}
          multiline
          textAlignVertical='top'
          returnKeyType="done"
          value={this.state.body}
          onChangeText={(text) => {this.setState({body: text})}}
          underlineColorAndroid="transparent" />
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
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
