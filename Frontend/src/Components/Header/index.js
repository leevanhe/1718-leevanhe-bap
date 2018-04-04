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
        flex: 1,
        maxHeight: 70,
        paddingTop: 25,
        alignItems: 'center',
        backgroundColor: Colors.orange,
      },
      logo : {
        width: 22,
        height: 36
      }
})

export default Header;
