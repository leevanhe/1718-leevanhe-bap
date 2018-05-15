import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Header from '../../Components/Others/Header/index';
import Friend2ItemService from '../../Actions/Timeline/Friend2ItemActions';
import PropTypes from 'prop-types';

class Friend2 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Friend2ItemService friendesId={this.props.friendesId}/>
      </View>
    );
  }
}

Friend2.propTypes = {
  friendesId: PropTypes.number.isRequired,
}

export default Friend2;