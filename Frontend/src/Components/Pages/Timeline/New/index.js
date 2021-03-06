import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Config/theme';
import ValidationComponent from 'react-native-form-validator';

const logo = require('../../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';


class NewPostService extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            description: '',
        };
    }

    componentDidMount () {
        this.props.fetchUser(this.props.token, this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data.length > 0 && nextProps.error == undefined) {
            this.setState({data: nextProps.data});
        }
    }

    submit = () => {
        this.validate({
            description: {minlength:3, maxlength:255, required: true},
        });

        let data = {
            description: this.state.description
        };

        if(Boolean(this.getErrorMessages())) {
            Alert.alert(
                this.getErrorMessages()
            )
        }

        this.props.submitPost(this.props.token, this.props.id, JSON.stringify(data))
    }

    

    render () {
        return (
            <View style={{flex:1}}>
                <View style={styles.box}>
                    <TouchableOpacity style={{ marginLeft: 10, paddingTop:5}} onPress={() => Actions.pop()}>
                        <Icon name="chevron-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems: 'center', marginLeft: 36}}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <TouchableOpacity style={{marginRight: 20, paddingTop:7}} onPress = { () => {this.submit()}}>
                        <Text style={{color:Colors.white, fontWeight: 'bold', fontSize: 20}}>Place</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.container}>
                    {this.state.data != undefined? this.state.data.map((user, i) => {
                        return (
                            <View key={i} style={{flex:1}}>
                                <View style= {{flex: 1, flexDirection: 'row',}}>
                                    <View style={{marginRight: 10}}>
                                        <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                    </View>
                                    <View style = {{paddingTop:8}}>
                                        <Text style={{backgroundColor: Colors.white,}}>{user.name}</Text>
                                    </View>
                                </View>
                                <View style={{flex:8}}>
                                    <TextInput autoFocus={true} style={{borderBottomWidth: 1, borderColor: Colors.gray, paddingBottom: 10}} placeholder = {'Share something with your network'} onChangeText ={(description) => {this.setState({description})}} />
                                </View>
                            </View> 
                        )
                    }): null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: Colors.white,
        padding: 20,
    },
    avatarSmall: {
        width: 40,
        height: 40,
    },
    box: {
        flex: 1,
        maxHeight: 70,
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor: Colors.orange,
    },
    logo : {
        width: 22,
        height: 36
    }
})

export default NewPostService;