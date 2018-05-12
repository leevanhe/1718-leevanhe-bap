import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ActionTypes from '../../../Actions/actionTypes';
import { connect } from 'react-redux';
import Colors from '../../../Config/theme';
import Button from'../../Others/Button/index';

const logo = require('../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class FriendItemService extends Component {
	constructor(props) {
		super(props);
		this.state = {
            data: [],
		}
    }

    componentDidMount () {
        this.props.fetchFriendItem(this.props.token, this.props.id, this.props.friendId)
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.data.length > 0 && nextProps.error == undefined) {
            this.setState({data: nextProps.data});
        }
    }

	render() {
			return (
			<View style={{flex: 1}}>
                <View style={styles.box}>
                    <TouchableOpacity style={{ marginLeft: 10, paddingTop:5}} onPress={() => Actions.pop()}>
                        <Icon name="chevron-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems: 'center', marginRight: 30}}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                </View>
                <ScrollView style= {{flex: 1}}>
                    {this.state.data != undefined? this.state.data.map((friend, i) => {
                        return (
                            <View key={i} style={styles.info}>
                                <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                <Text style={styles.name}>{friend.name}</Text>
                                <Text numberOfLines={4}>{friend.description}</Text>
                                <Button onPress={() => this.test()}>Read more</Button>
                            </View>
                        )
                    }): null}

                    <View style={styles.div}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.title}>Realisations</Text>
                        </View>     
                    </View>
                </ScrollView>
			</View>
			);
		}
  }

  const styles = StyleSheet.create ({
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
    },
    info: {
        flex: 1,
        padding: 10,
        marginTop: 110,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        marginTop: -55,
    },
    name: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    div: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: 20,
        color: Colors.red,
        alignItems: 'center'
    },
});
  


export default connect()(FriendItemService);