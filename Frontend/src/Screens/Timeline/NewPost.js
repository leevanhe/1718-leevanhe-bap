import React, { Component } from 'react';
import { View } from 'react-native';
import NewPostSevice from '../../Actions/Timeline/NewPostActions';

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