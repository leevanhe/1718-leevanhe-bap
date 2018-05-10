import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ActionTypes from '../../../Actions/actionTypes';
import { connect } from 'react-redux';
import store from '../../../Reducers/index';
import Colors from '../../../Config/theme';

const logo = require('../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class DetailFriend extends Component {
	constructor(props) {
		super(props);
		this.state = {
            selected: store.getState().friend.selected,
            friend: store.getState().friend.friend
		}
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.data != null) {
           console.log(nextProps);
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

				<View style={{flex: 1}}>
					<Text>{this.state.friend.friend.name}</Text>
				</View>
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
    }
});
  


export default connect(({routes}) => ({routes}))(DetailFriend)