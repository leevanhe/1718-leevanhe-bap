import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../Components/Header/index';

class Timeline extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Header/>
        <Text>Timeline</Text>
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