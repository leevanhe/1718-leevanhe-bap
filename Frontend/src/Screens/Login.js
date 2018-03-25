import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Config/theme';
import LoginService from '../Actions/Login/AuthActions';

const logo = require('../Assets/logo-enkel.png');

class Login extends React.Component{  
    constructor(props){
        super(props);
    }

render(){  
      return (
        <View style={styles.box}>
            <Image style={styles.logo} source={require('../Assets/logo-enkel.png')} />
            <LoginService />
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
