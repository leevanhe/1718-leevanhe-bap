import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../Config/theme';
import NewUserService from '../Actions/Register/RegisterActions';

const logo = require('../Assets/logo-enkel.png');

class Register extends React.Component{  

    render(){  
        return (
            <View style={styles.box}>
                <NewUserService />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: Colors.orange,
    }
});
    
export default Register;
