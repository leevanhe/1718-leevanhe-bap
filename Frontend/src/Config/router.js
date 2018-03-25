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
                labelStyle={{flex: 1, alignSelf: 'center', fontSize: 12, marginBottom: 15, color: Colors.white}}>
                
                <Scene key="timeline" component={Timeline} tabBarLabel="Timeline" hideNavBar={true}/>
                <Scene key="matchmaking" component={Matchmaking} tabBarLabel="Match" hideNavBar={true}/>
                <Scene key="events" component={Events} tabBarLabel="Events" hideNavBar={true}/>
                <Scene key="profile" component={Profile} tabBarLabel="Profile" hideNavBar={true}/>

            </Scene>
        </Scene>
    </Router>
  );
  export default navigator;
  