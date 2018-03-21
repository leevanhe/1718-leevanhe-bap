import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

import Login from '../Screens/Login';
import Timeline from '../Screens/Timeline/Timeline';
import Matchmaking from '../Screens/Matchmaking/Matchmaking';
import Events from '../Screens/Events/Events';
import Profile from '../Screens/Profile';
//import TabIcon from '../Components/TabIcon';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      return defaultReducer(state, action);
    };
  };
  
  const navigator = () => (
    <Router createReducer={reducerCreate} >
        <Scene key="root" tabBarPosition='bottom'>

            <Scene initial={true} key="login" component={Login} hideNavBar={true}/> 
  
            <Scene 
                key="tabbar"
                tabs={true}
                hideNavBar={true}
                swipeEnabled={false}
                activeBackgroundColor={Colors.deeppink}
                labelStyle={{display: 'none'}}
                activeTintColor={Colors.orange}
                activeBackgroundColor = {Colors.red}
                tabBarStyle={{ backgroundColor: Colors.orange }}>
                
                <Scene key="timeline" component={Timeline}/>
                <Scene key="matchmaking" component={Matchmaking}/>
                <Scene key="events" component={Events}/>
                <Scene key="profile" component={Profile}/>

            </Scene>
        </Scene>
    </Router>
  );
  export default navigator;
  