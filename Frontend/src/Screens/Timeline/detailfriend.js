import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Header from '../../Components/Others/Header/index';
import FriendItemService from '../../Actions/Timeline/FriendItemActions';
import PropTypes from 'prop-types';

class Friend extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FriendItemService friendId={this.props.friendId}/>
      </View>
    );
  }
}

Friend.propTypes = {
  friendId: PropTypes.number.isRequired,
}

export default Friend;