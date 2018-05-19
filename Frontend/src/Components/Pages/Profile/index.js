import React, { Component,  } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Colors from '../../../Config/theme';
import GenerateLoading from '../../Others/Loading/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from'../../Others/Button/index';
import Collapsible from 'react-native-collapsible';

class ProfileService extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: {},
          collapsed: true
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

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
        <ScrollView style={{flex: 1}}>

                {this.state.data.startups != undefined ? this.state.data.startups.map((startup, i) => {
                    return (
                        <View key={i} style={styles.info}>
                            <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                            <Text style={styles.name}>{startup.name}</Text>
                            <Text>{startup.description}</Text>
                            <TouchableOpacity onPress={this._toggleExpanded} style={styles.button}>
                                    <Text style={styles.buttonText}>Read more</Text>
                            </TouchableOpacity>
                            <Collapsible collapsed={this.state.collapsed} align='center'>
                                <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                                    <Icon style={{marginRight: 5}} name="users" size={20} color={Colors.orange}/>
                                    <Text style={{marginRight:60}}>{startup.employees}</Text>
                                    <Icon style={{marginRight: 5, marginLeft: 60}} name="calendar" size={20} color={Colors.orange}/>
                                    <Text>{startup.start}</Text>
                                </View>
                                <View style={{flex:1,alignItems: 'center'}}>
                                <Text>Website: {startup.website}</Text>
                                </View>
                            </Collapsible>
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
                    }):
                    <View style={styles.textmessage}>
                        <Text>There are no realisations</Text>
                        <Button onPress={() => this.test()}>Add a realisation</Button>
                    </View>
                    }
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
                    }):
                    <View style={styles.textmessage}>
                        <Text>There are no connections</Text>
                        <Button onPress={() => Actions.friends()}>Expand your network</Button>
                    </View>}
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
    textmessage: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5
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
    },
    button: {
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 5,
    },
    buttonText: {
        textAlign: 'center',
    },
    content: {
        padding: 20,
    }    
});

export default connect()(ProfileService);