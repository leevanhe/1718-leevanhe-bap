import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';
import { View } from 'react-native';

import Login from '../Screens/Login';
import Timeline from '../Screens/Timeline/Timeline';
import Matchmaking from '../Screens/Matchmaking/Matchmaking';
import Events from '../Screens/Events/Events';
import Profile from '../Screens/Profile';
import TabIcon from '../Components/TabIcon/index';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      return defaultReducer(state, action);
    };
  };
  
  const navigator = () => (
    <Router createReducer={reducerCreate} >
        <Scene key="root" tabBarPosition='bottom'>

            {/*<Scene initial={true} key="login"component={Login} hideNavBar={true}/>*/}
  
            <Scene 
                key="tabbar"
                lazy={true}
                tabs={true}
                hideNavBar={true}
                swipeEnabled={false}
                activeBackgroundColor={Colors.red}
                activeTintColor={Colors.white}
                tabBarStyle={{ backgroundColor: Colors.orange }}
                >

                <Scene key="timeline" component={Timeline} hideNavBar={true} icon={TabIcon} iconName="home" tabBarLabel="test"/>
                <Scene key="matchmaking" component={Matchmaking} hideNavBar={true} icon={TabIcon} tabBarLabel=" "/>
                <Scene key="events" component={Events} tabBarLabel="Events" hideNavBar={true} icon={TabIcon} tabBarLabel=" "/>
                <Scene key="profile" component={Profile} tabBarLabel="Profile" hideNavBar={true} icon={TabIcon} tabBarLabel=" "/>

            </Scene>
        </Scene>
    </Router>
  );
  export default navigator;
  