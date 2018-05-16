import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ActionTypes from '../../../../Actions/actionTypes';
import { connect } from 'react-redux';
import Colors from '../../../../Config/theme';
import Button from'../../../Others/Button/index';

const logo = require('../../../../Assets/logo-enkel.png');
import {Actions} from 'react-native-router-flux';

class FriendItemService extends Component {
	constructor(props) {
		super(props);
		this.state = {
            data: {},
		}
    }

    componentDidMount () {
        this.props.fetchFriendItem(this.props.token, this.props.id, this.props.friendId)
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.error == undefined) {
            this.setState({data: nextProps.data});
          } 
    }

	render() {
			return (
			<View style={{flex: 1}}>
                <View style={styles.box}>
                    <TouchableOpacity style={{ marginLeft: 10, paddingTop:5}} onPress={() => Actions.timeline()}>
                        <Icon name="chevron-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems: 'center', marginRight: 30}}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                </View>
                <ScrollView style= {{flex: 1}}>
                    {this.state.data.connection != undefined? this.state.data.connection.map((friend, i) => {
                        return (
                            <View key={i} style={styles.info}>
                                <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                <Text style={styles.name}>{friend.name}</Text>
                                <Text numberOfLines={4}>{friend.description}</Text>
                                <Button onPress={() => this.test()}>Read more</Button>
                                <Button onPress={() => {this.props.addFriend(this.props.token, this.props.id, this.newFriendId = friend.id);}}></Button> 
                            </View>
                        )
                    }): null}

                    <View style={styles.div}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.title}>Realisations</Text>
                    </View>


                    {this.state.data.realisations != undefined ? this.state.data.realisations.map((r, i) =>{
                        return (
                            <View key={i} style={{flex: 1, flexDirection: 'row', marginTop:10}}>
                                <View style={{marginRight: 10}}>
                                    <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                </View>
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text>{r.name}</Text>
                                    <Text numberOfLines={1}>{r.description}</Text>
                                </View>
                            </View>
                        )
                    }): null}

                    
                    </View>


                    <View style={styles.div}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.title}>Connections</Text>
                    </View>
                    {this.state.data.confromcon != undefined ? this.state.data.confromcon.map((c, i) =>{
                        return (
                            <View key={i} style={{flex: 1, flexDirection: 'row', marginTop:10}}>
                                    <View style={{marginRight: 10}}>
                                        <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                    </View>
                                    <TouchableOpacity onPress={() => {Actions.detailFriend2({'friendesId': c.id})}}>
                                    <View style={{flex:1, justifyContent:'center'}}>
                                        <Text>{c.name}</Text>
                                        <Text>{c.id}</Text>
                                        <Text numberOfLines={1}>{c.description}</Text>
                                    </View>
                                    </TouchableOpacity>
                            </View>
                        )
                    }): null}
                </View>

                <View style={styles.divRed}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.titleRed}>Recommendations</Text>
                    </View>
                    {this.state.data.recfromrec != undefined ? this.state.data.recfromrec.map((re, i) =>{
                        return (
                            <View key={i} style={{flex: 1, flexDirection: 'row', marginTop:10}}>
                                <View style={{marginRight: 10}}>
                                    <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                </View>
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text style={styles.textRed}>{re.name}</Text>
                                    <Text style={styles.textRed} numberOfLines={1}>{re.description}</Text>
                                </View>
                            </View>
                        )
                    }): null}
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
    divRed: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.red,
        marginBottom: 20,
    },
    titleRed: {
        fontSize: 20,
        color: Colors.white,
        alignItems: 'center' 
    },
    textRed: {
        color: Colors.white
    },
    title: {
        fontSize: 20,
        color: Colors.red,
        alignItems: 'center'
    },
    avatarSmall: {
        width: 60,
        height: 60,
    },
});
  


export default connect()(FriendItemService);