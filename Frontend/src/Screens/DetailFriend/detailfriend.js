import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Header from '../../Components/Others/Header/index';

import DetailFriend from '../../Components/Pages/DetailFriend/index';

class Friend extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <DetailFriend/>
      </View>
    );
  }
}

export default Friend;