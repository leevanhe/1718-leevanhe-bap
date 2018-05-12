import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';

import Colors from '../../../Config/theme';
import GenerateLoading from '../../Others/Loading/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from'../../Others/Button/index';

class ProfileService extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: {},
        }
        loading = false;
  }
  
  componentDidMount() {
      this.props.fetchProfile(this.props.token);
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.error == undefined) {
      this.setState({data: nextProps.data});
    }   
  }

  test() {
      console.log('tested');
  }

  render() {
    return (
        <ScrollView style={{flex: 1}}>
                {this.state.data.startups != undefined ? this.state.data.startups.map((startup, i) => {
                    return (
                        <View key={i} style={styles.info}>
                            <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                            <Text style={styles.name}>{startup.name}</Text>
                            <Text>{startup.description}</Text>
                            <Button onPress={() => this.test()}>Read more</Button>
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
                    {this.state.data.connections != undefined ? this.state.data.connections.map((c, i) =>{
                        return (
                            <View key={i} style={{flex: 1, flexDirection: 'row', marginTop:10}}>
                                <View style={{marginRight: 10}}>
                                    <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                </View>
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text>{c.name}</Text>
                                    <Text numberOfLines={1}>{c.description}</Text>
                                </View>
                            </View>
                        )
                    }): null}
                </View>

                <View style={styles.divRed}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.titleRed}>Recommendations</Text>
                    </View>
                    {this.state.data.recommendations != undefined ? this.state.data.recommendations.map((re, i) =>{
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
        );
    }
}

const styles = StyleSheet.create ({
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
    title: {
        fontSize: 20,
        color: Colors.red,
        alignItems: 'center'
    },
    titleRed: {
        fontSize: 20,
        color: Colors.white,
        alignItems: 'center' 
    },
    textRed: {
        color: Colors.white
    },
    avatarSmall: {
        width: 60,
        height: 60,
    },
    error: {
        alignItems: 'center'
    }
    
});

export default connect()(ProfileService);