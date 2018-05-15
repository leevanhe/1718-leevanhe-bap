import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator,ListView,  TouchableOpacity, Image, TextInput } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Config/theme';

const logo = require('../../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class NewUserService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            line1: '',
            city: '',
            ZIP: '',
            country: '',
            name: '',
            description: '',
            website: '',
            employees: null,
            start: '',
        };
    }
   
    componentWillReceiveProps(nextProps) {
        if(nextProps.error != undefined){
            this.error = nextProps.error;
        } 
    }

    submit = () => {
        let data = {
            line1:this.state.line1,
            city:this.state.city,
            username:this.state.username,
            ZIP:this.state.ZIP,
            country:this.state.country,
            name:this.state.name,
            description:this.state.description,
            website:this.state.website,
            employees:this.state.employees,
            start:this.state.start,
            password:this.state.password
        };
        this.props.register(JSON.stringify(data))
    }

    

    render () {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.box}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style ={{flex: 1, alignItems: 'center'}}>
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'Username'} onChangeText ={(username) => {this.setState({username})}} />
                    <TextInput autoCapitalize="none" secureTextEntry={true} style={styles.textInput} placeholder = {'password'} onChangeText ={(password) => {this.setState({password})}} />

                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'line1'} onChangeText ={(line1) => {this.setState({line1})}} />
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'city'} onChangeText ={(city) => {this.setState({city})}} />
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'ZIP'} onChangeText ={(ZIP) => {this.setState({ZIP})}} />
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'Country'} onChangeText ={(country) => {this.setState({country})}} />

                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'name'} onChangeText ={(name) => {this.setState({name})}} />
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'description'} onChangeText ={(description) => {this.setState({description})}} />

                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'website'} onChangeText ={(website) => {this.setState({website})}} />
                    <TextInput autoCapitalize="none" keyboardType='numeric' style={styles.textInput} placeholder = {'employees'} onChangeText ={(employees) => {this.setState({employees})}} />
                    <TextInput autoCapitalize="none" style={styles.textInput} placeholder = {'start'} onChangeText ={(start) => {this.setState({start})}} />

                    <TouchableOpacity style={styles.btn} onPress = { () => {this.submit()}}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    box: {
        flex: 1,
        marginTop: 25,
        marginBottom: 20,
        alignItems: 'center',
    },
    logo : {
        width: 22,
        height: 36
    },
    textInput: {
        marginBottom: 15,
        height: 40,
        width: 300,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'white'
    },
    error: {
        color: '#efefef',
        textAlign: 'center',
        fontWeight: '800',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'red',
        padding: 5
    },
    btn: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 300,
    },
    btnText: {
        fontSize: 20,
        color: Colors.red,
    }
})

export default NewUserService;