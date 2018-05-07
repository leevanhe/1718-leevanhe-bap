import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Others/Header/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/theme';

import MatchmakingService from '../../Actions/Matchmaking/MatchmakingActions';

import {Actions} from 'react-native-router-flux';

class Matchmaking extends Component {
  render() {
    return (
      <View style={styles.box}>
		    <Header/>
        <View style={styles.container}>
            <View style={{flex: 1, padding: 20}}>
                <Text>Share something with your network</Text>
            </View>
            <View style={{paddingRight: 20}}>
              <TouchableOpacity onPress={()=> Actions.newservice()}>
                <Icon name='edit' size={40} color="#EC6845"/> 
              </TouchableOpacity> 
            </View>
        </View> 
        <MatchmakingService/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 60,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo : {
    width: 30,
    height: 62
  }
})

export default Matchmaking;