import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../Config/theme';
import LoginService from '../Actions/Login/AuthActions';

const logo = require('../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class Login extends React.Component{  
    render(){  
        return (
            <View style={styles.box}>
                <Image style={styles.logo} source={require('../Assets/logo-enkel.png')} />
                <LoginService />
                <TouchableOpacity onPress={()=> Actions.register()}>
                    <Text style={{color: Colors.white, marginLeft: 250}}>Register</Text>
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
    }
});
    
export default Login;
