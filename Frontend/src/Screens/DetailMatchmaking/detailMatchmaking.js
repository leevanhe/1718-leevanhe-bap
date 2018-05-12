import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Header from '../../Components/Others/Header/index';
import MatchmakingItemService from '../../Actions/Matchmaking/MatchmakingItemActions';
import PropTypes from 'prop-types';

class MatchmakingDetail extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MatchmakingItemService matchmakingId={this.props.matchmakingId}/>
      </View>
    );
  }
}

MatchmakingDetail.propTypes = {
  matchmakingId: PropTypes.number.isRequired,
}

export default MatchmakingDetail;