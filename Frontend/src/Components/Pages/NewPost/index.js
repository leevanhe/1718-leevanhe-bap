import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, TextInput,ListView,  TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Config/theme';

class NewPostService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    render () {
        return (
            <ScrollView style={styles.container}>
                {this.state.data != undefined? this.state.data.map((user, i) => {
                    return (
                        <View style={{flex :1, flexDirection: 'row'}}>
                            <View style={{marginRight: 10}}>
                                <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Text>{user.name}</Text>
                            </View>
                        </View>
                    )
                }): null}
            </ScrollView>
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
})

export default connect()(NewPostService);