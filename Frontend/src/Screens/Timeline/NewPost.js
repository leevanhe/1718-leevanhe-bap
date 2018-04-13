import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/theme';
import NewPostService from '../../Components/Timeline/new';

import {Actions} from 'react-native-router-flux';
const logo = require('../../Assets/logo-enkel.png');

class NewPost extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.box}>
          <TouchableOpacity style={{ marginLeft: 10, paddingTop:5}} onPress={() => Actions.pop()}>
            <Icon name="chevron-left" size={30} color="#FFF"/>
          </TouchableOpacity>
          <View style={{flex:1, alignItems: 'center', marginRight:30}}>
            <Image source={logo} style={styles.logo} />
          </View>
        </View>
        
        <NewPostService/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    maxHeight: 70,
    paddingTop: 25,
    flexDirection: 'row',
    backgroundColor: Colors.orange,
  },
  logo : {
    width: 22,
    height: 36
  }
})

export default NewPost;