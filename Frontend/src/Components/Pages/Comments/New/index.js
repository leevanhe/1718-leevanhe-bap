import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { connect }from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Colors from '../../../../Config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require('../../../../Assets/logo-enkel.png');

class NewCommentService extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        description: '', 
    }
  }   
  
    componentDidMount() {
        this.props.fetchUserAndPost(this.props.token, this.props.id, this.props.postId);
    }   

  componentWillReceiveProps(nextProps) {
    if(nextProps.data.length > 0 && nextProps.error == undefined) {
        this.setState({data: nextProps.data});
    }
  }

  submit = () => {
    let data = {
        description: this.state.description
    };

    

    this.props.submitComment(this.props.token, this.props.id,  this.props.postId, JSON.stringify(data))
    }

  

  render() {
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

            <View style={{flex:1}}>
                <TextInput placeholder = {'leave a comment'} onChangeText ={(description) => {this.setState({description})}} />
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

export default connect()(NewCommentService);