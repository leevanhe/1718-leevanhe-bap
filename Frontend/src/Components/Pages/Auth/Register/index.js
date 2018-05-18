import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Config/theme';

const logo = require('../../../../Assets/logo-enkel.png');

import ValidationComponent from 'react-native-form-validator';

class NewUserService extends ValidationComponent {
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
        this.validate({
            username: {minlength:3, maxlength:15, required: true},
            password: {minlength:3, maxlength:15, required: true},
            line1: {minlength:3, maxlength:15, required: true},
            city: {minlength:3, maxlength:15, required: true},
            ZIP: {minlength:3, maxlength:15, required: true, numbers: true},
            country: {minlength:3, maxlength:15, required: true},
            name: {minlength:3, maxlength:15, required: true},
            description: {minlength:3, maxlength:255, required: true},
            website: {minlength:3, maxlength:15, required: true},
            employees: {numbers: true, required: true},
            start: {date: 'YYYY-MM-DD', required: true}
        });

        if(Boolean(this.getErrorMessages())) {
            Alert.alert(
                this.getErrorMessages()
            )
        }

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
                    <TextInput ref="username" autoCapitalize="none" style={styles.textInput} placeholder = {'Username'} onChangeText ={(username) => {this.setState({username})}} />
                    <TextInput ref="password" autoCapitalize="none" secureTextEntry={true} style={styles.textInput} placeholder = {'password'} onChangeText ={(password) => {this.setState({password})}} />
                    <TextInput ref="line1" autoCapitalize="none" style={styles.textInput} placeholder = {'line1'} onChangeText ={(line1) => {this.setState({line1})}} />
                    <TextInput ref="city" autoCapitalize="none" style={styles.textInput} placeholder = {'city'} onChangeText ={(city) => {this.setState({city})}} />
                    <TextInput ref="ZIP" autoCapitalize="none" style={styles.textInput} placeholder = {'ZIP'} onChangeText ={(ZIP) => {this.setState({ZIP})}} />
                    <TextInput ref="country" autoCapitalize="none" style={styles.textInput} placeholder = {'Country'} onChangeText ={(country) => {this.setState({country})}} />

                    <TextInput ref="name" autoCapitalize="none" style={styles.textInput} placeholder = {'name'} onChangeText ={(name) => {this.setState({name})}} />
                    <TextInput ref="description" autoCapitalize="none" style={styles.textInput} placeholder = {'description'} onChangeText ={(description) => {this.setState({description})}} />

                    <TextInput ref="website" autoCapitalize="none" style={styles.textInput} placeholder = {'website'} onChangeText ={(website) => {this.setState({website})}} />
                    <TextInput ref="employees" autoCapitalize="none" keyboardType='numeric' style={styles.textInput} placeholder = {'employees'} onChangeText ={(employees) => {this.setState({employees})}} />
                    <TextInput ref="start" autoCapitalize="none" style={styles.textInput} placeholder = {'start'} onChangeText ={(start) => {this.setState({start})}} />

                    <TouchableOpacity style={styles.button} onPress = { () => {this.submit()}}>
                        <Text style={styles.buttonText}>Register</Text>
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
    button: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 300,
    },
    buttonText: {
        fontSize: 20,
        color: Colors.red,
    }
})

export default connect()(NewUserService);