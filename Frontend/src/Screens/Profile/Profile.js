import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../Components/Others/Header/index';
import ProfileSevice from '../../Actions/Profile/ProfileActions';

class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
		    <Header/>
        <ProfileSevice />
      </View>
    );
  }
}

export default Profile;