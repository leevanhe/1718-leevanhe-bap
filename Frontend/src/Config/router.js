import React, { Component } from 'react';
import ReactNativeRouter, { Actions, Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from './theme';
import { View } from 'react-native';

//Auth
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';

//Comment
import Comments from '../Screens/Comments/Comments';
import NewComment from '../Screens/Comments/NewComment';

//Matchmaking
import NewService from '../Screens/Matchmaking/NewMatchmaking';
import Matchmaking from '../Screens/Matchmaking/Matchmaking';
import MatchmakingDetail from '../Screens/Matchmaking/detailMatchmaking';
import Category from '../Screens/Category/Category';

//Timeline
import Friend from '../Screens/Timeline/detailfriend';
import Friend2 from '../Screens/Timeline/detailfriend2';
import Timeline from '../Screens/Timeline/Timeline';
import NewPost from '../Screens/Timeline/NewPost';
import Friends from '../Screens/Startups/Startups'

//Profile
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
            <Scene key="detailFriend" component={Friend} hideNavBar={true}/>
            <Scene key="detailFriend2" component={Friend2} hideNavBar={true}/>
            <Scene key="friends" component={Friends} hideNavBar={true}/>
            
            <Scene key="comments" component={Comments} hideNavBar={true}/>
            <Scene key="newcomment" component={NewComment} hideNavBar={true}/>

            <Scene key="newservice" component={NewService} hideNavBar={true}/>
            <Scene key="detailMatchmaking" component={MatchmakingDetail} hideNavBar={true}/>
            <Scene key="category" component={Category} hideNavBar={true}/>

    
            <Scene 
                key="tabbar"
                lazy={true}
                tabs={true}
                hideNavBar={true}
                swipeEnabled={false}
                activeBackgroundColor={Colors.red}
                tabBarStyle={{ backgroundColor: Colors.orange }}
                labelStyle={{flex: 1, alignSelf: 'center', fontSize: 12, marginBottom: 15, color: Colors.white}}
                >

                <Scene key="timeline" component={Timeline} hideNavBar={true} iconName="calendar" tabBarLabel="Timeline" icon={TabIcon}/>
                <Scene key="matchmaking" component={Matchmaking} hideNavBar={true} icon={TabIcon} iconName="home"/>
                <Scene key="profile" component={Profile} tabBarLabel="Profile" hideNavBar={true} icon={TabIcon} iconName="home"/>
            </Scene>
        </Scene>
    </Router>
);
    
export default navigator;
  