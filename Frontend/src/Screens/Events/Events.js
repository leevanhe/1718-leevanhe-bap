import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../Components/Header/index';

class Events extends Component {
  render() {
    return (
      <View style={styles.box}>
		    <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  }
})

export default Events;