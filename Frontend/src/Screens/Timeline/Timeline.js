import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/Header/index';
import Icon from 'react-native-vector-icons/FontAwesome';

import TimelineService from '../../Actions/Timeline/TimelineActions';

class Timeline extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Header/>
        <Text>Flatlist gebruiken voor lazy loading</Text>
        <TimelineService />
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