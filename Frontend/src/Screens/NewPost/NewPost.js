import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import NewPostSevice from '../../Actions/NewPost/NewPostActions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Config/theme';

import {Actions} from 'react-native-router-flux';

class NewPost extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <NewPostSevice />
        </View>
    );
  }
}

export default NewPost;