import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../Components/Others/Header/index';

import MatchmakingService from '../../Actions/Matchmaking/MatchmakingActions';

class Matchmaking extends Component {
  render() {
    return (
      <View style={styles.box}>
		    <Header/>
        <MatchmakingService/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  }
})

export default Matchmaking;