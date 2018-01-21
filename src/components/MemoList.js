import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment-timezone';

class MemoList extends React.Component {
  renderMemo({item}) {
    return (
      <TouchableHighlight onPress={() => {
          this.props.navigation.navigate(
            'MemoDetail', {memo: item});
          }}>
        <View style={styles.memolistItem}>
          <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
          <Text style={styles.memoDate}>{
              moment(item.createdOn).tz('Asia/Tokyo').format('YYYY年MM月DD日')
            }
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View style={styles.memolist}>
        <FlatList data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memolist: {
    width: '100%',
    flex: 1,
  },
  memolistItem: {
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
