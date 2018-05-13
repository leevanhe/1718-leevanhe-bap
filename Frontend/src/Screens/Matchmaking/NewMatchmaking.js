import React, { Component } from 'react';
import { View } from 'react-native';
import NewSerivceSevice from '../../Actions/Matchmaking/NewMatchmakingActions';

class NewService extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <NewSerivceSevice/>
        </View>
    );
  }
}

export default NewService;