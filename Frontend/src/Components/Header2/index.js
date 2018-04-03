import React, { Component } from 'react';
import { Text, View, StyleSheet,  Image } from 'react-native';
import Colors from '../../Config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header2 = (props) => (
    <View style={style.container}>
        <View style={{flex: 1, padding: 20}}>
            <Text>Share something with your network</Text>
        </View>
        <View style={{paddingRight: 20}}>
            <Icon name='edit' size={40} color="#EC6845"/>  
        </View>
    </View>
)

const style = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 60,
        alignItems: 'center',
        backgroundColor: Colors.white,
      },
      logo : {
        width: 38,
        height: 62
      }
})

export default Header2;
