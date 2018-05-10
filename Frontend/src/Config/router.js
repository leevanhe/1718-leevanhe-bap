import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';
import { View } from 'react-native';

import Login from '../Screens/Login';
import Friend from '../Screens/DetailFriend/detailfriend';
import Register from '../Screens/Register';
import Timeline from '../Screens/Timeline/Timeline';
import NewPost from '../Screens/NewPost/NewPost';
import NewService from '../Screens/NewService/NewService';
import Comments from '../Screens/Comments/Comments';
import Matchmaking from '../Screens/Matchmaking/Matchmaking';
import Events from '../Screens/Events/Events';
import Profile from '../Screens/Profile/Profile';
import TabIcon from '../Components/Others/TabIcon/index';
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

            <Scene initial={true} key="login"component={Login} hideNavBar={true}/>

            <Scene key="register" component={Register} hideNavBar={true}/>

            <Scene key="newpost" component={NewPost} hideNavBar={true}/>
            <Scene key="comments" component={Comments} hideNavBar={true}/>

            <Scene key="newservice" component={NewService} hideNavBar={true}/>

  
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

                <Scene key="timeline" hideNavBar={true}>
                    <Scene key="timeline" component={Timeline}/>
                    <Scene key="friend" component={Friend}/>
                </Scene>
                
                <Scene key="matchmaking" component={Matchmaking} hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="events" component={Events} tabBarLabel="Events" hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="profile" component={Profile} tabBarLabel="Profile" hideNavBar={true} icon={TabIcon} iconName="home"/>

            </Scene>
        </Scene>
    </Router>
  );
  export default navigator;
  