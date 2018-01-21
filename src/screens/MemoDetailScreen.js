import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

import moment from 'moment-timezone';

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({memo: params.memo});
  }

  dateString(date) {
    const str = date.toISOString();
    return str.split('T')[0];
  }

  render() {
    const {memo} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
            <Text style={styles.memoHeaderDate}>{
                moment(memo.createdOn).tz('Asia/Tokyo').format('YYYY年MM月DD日')
              }
            </Text>
          </View>
        </View>

        <View style={styles.memoContents}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton color='white' style={styles.editButton}
          onPress={() => {this.props.navigation.navigate('MemoEdit', {memo: memo})}}>
          {'\uf040'}
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
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
  memoBody: {
    fontSize: 22,
    lineHeight: 22,
  },
});

export default MemoDetailScreen;
