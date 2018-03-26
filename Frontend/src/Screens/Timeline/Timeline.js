import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/Header/index';

import Icon from 'react-native-vector-icons/FontAwesome';

class Timeline extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Header/>
        <Text>Timeline</Text>
        <Icon name="home" size={30} color="#900"/>
        <Text>Flatlist gebruiken voor lazy loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  }
})

export default Timeline;