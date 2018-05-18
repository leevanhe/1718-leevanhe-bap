import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator,ListView,  TouchableOpacity, Image, TextInput } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../Config/theme';

const logo = require('../../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class NewServiceService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: '',
            description: '',
            city: ''
        };
    }

    componentDidMount () {
        this.props.fetchUser(this.props.token, this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data.length > 0 && nextProps.error == undefined) {
            this.setState({data: nextProps.data});
        }
    }

    submit = () => {
        let data = {
            title: this.state.title,
            description: this.state.description,
            city: this.state.city,
        };

        this.props.submitService(this.props.token, this.props.id, JSON.stringify(data))
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

                                <View style={{flex: 8}}>
                                    <TextInput autoFocus={true} placeholder={'title'} style={{borderBottomWidth: 1, borderColor: Colors.gray, paddingBottom: 10}} onChangeText={(title) => {this.setState({title})}} />
                                    <TextInput placeholder={'description'} style={{borderBottomWidth: 1, borderColor: Colors.gray, paddingBottom: 10, marginTop: 25}} onChangeText={(description) => {this.setState({description})}} />
                                    <TextInput placeholder={'city'} style={{borderBottomWidth: 1, borderColor: Colors.gray, paddingBottom: 10, marginTop: 25}} onChangeText={(city) => {this.setState({city})}} />
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

export default NewServiceService