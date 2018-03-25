import React, { Component } from 'react';
import { Text, View, StyleSheet,  Image } from 'react-native';
import Colors from '../../Config/theme';

const logo = require('../../Assets/logo-enkel.png');

const Header = (props) => (
    <View style={style.container}>
        <Image source={logo} style={style.logo} />
    </View>
)

const style = StyleSheet.create ({
    container: {
        height: 100,
        paddingTop: 25,
        alignItems: 'center',
        backgroundColor: Colors.orange,
      },
      logo : {
        width: 38,
        height: 62
      }
})

export default Header;
