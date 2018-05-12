import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Colors from '../Config/theme';
import LoginService from '../Actions/Login/AuthActions';
import {Actions} from 'react-native-router-flux';

const logo = require('../Assets/logo-enkel.png');

class Login extends React.Component{  
    render(){  
        return (
            <View style={styles.box}>
                <Image style={styles.logo} source={require('../Assets/logo-enkel.png')} />
                <LoginService />
                <TouchableOpacity onPress={()=> Actions.register()}>
                    <Text style={styles.register}>Register</Text>
                </TouchableOpacity> 
            </View>
            )

    }
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.orange,
    },
    logo: {
        marginTop: 45,
        marginBottom: 20
    },
    register:  {
        color: Colors.white, 
        marginLeft: 250
    }
});
    
export default Login;
