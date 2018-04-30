import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';
import { View } from 'react-native';

import Login from '../Screens/Login';
import Timeline from '../Screens/Timeline/Timeline';
import DetailUser from '../Screens/Timeline/DetailUser';
import DetailPost from '../Screens/Timeline/DetailPost';
import NewPost from '../Screens/Timeline/NewPost';
import Matchmaking from '../Screens/Matchmaking/Matchmaking';
import Events from '../Screens/Events/Events';
import Profile from '../Screens/Profile';
import TabIcon from '../Components/TabIcon/index';
import Icon  from 'react-native-vector-icons/FontAwesome';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      return defaultReducer(state, action);
    };
  };
  
  const navigator = () => (
    <Router createReducer={reducerCreate} >
        <Scene key="root" tabBarPosition='bottom'>

            <Scene key="newPost" component={NewPost} hideNavBar={true}/>

            <Scene key="detailUser" component={DetailUser} hideNavBar={true}/>

            <Scene key="detailPost" component={DetailPost} hideNavBar={true}/>

            <Scene initial={true} key="login"component={Login} hideNavBar={true}/>
  
            <Scene 
                key="tabbar"
                lazy={true}
                tabs={true}
                hideNavBar={true}
                swipeEnabled={false}
                activeBackgroundColor={Colors.red}
                activeTintColor={Colors.white}
                tabBarStyle={{ backgroundColor: Colors.orange }}
                labelStyle={{display: 'none'}}
                >

                <Scene key="timeline" component={Timeline} hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="matchmaking" component={Matchmaking} hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="events" component={Events} tabBarLabel="Events" hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="profile" component={Profile} tabBarLabel="Profile" hideNavBar={true} icon={TabIcon} iconName="home"/>

            </Scene>
        </Scene>
    </Router>
  );
  export default navigator;
  