import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Components/Header/index';
import ProfileSevice from '../Actions/Profile/ProfileActions';

class Profile extends Component {
  render() {
    return (
      <View>
		    <Header/>
        <ProfileSevice />
      </View>
    );
  }
}

export default Profile;