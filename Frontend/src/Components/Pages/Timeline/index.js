import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Config/theme';
import { Actions } from 'react-native-router-flux';
import GenerateLoading from '../../Others/Loading/index';
import Button from'../../Others/Button/index';

class TimelineService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };   
  }
  
  componentDidMount() {
    this.props.fetchPosts(this.props.token, this.props.id);
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0 && nextProps.error == undefined) {
      this.setState({data: nextProps.data, isLoaded: true});
    }
  }

  renderView () {
    if(this.state.isLoaded) {
      return (
        <ScrollView style={{flex: 1}}>
            {this.state.data != undefined ? this.state.data.map((a, i) => {
              return (
                a.posts.map((p, i) => {
                  return (
                    <View
                     style={styles.container}
                     key={i} >

                      <View style={styles.containerUser}>
                        <View style={{marginRight: 10}}>
                          <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        </View>
                        <View style={styles.name}>
                          <TouchableOpacity onPress={() => {Actions.detailFriend({'friendId': p.startup.id})}}>
                            <Text>{p.startup.name}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <Text>{p.description}</Text>

                      <View style={styles.containerActions}>
                        <Text style= {{paddingTop: 2}}>{p.comments_count}</Text>
                        <TouchableOpacity onPress={() => {Actions.comments({'postId':p.id})}}>
                          <Icon style={{marginLeft: 5}} name="comments-o" size={20} color={Colors.orange}/>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.containerActions}>

                        <TouchableOpacity style={styles.buttonLeft} onPress={() => {}}>
                          <Icon name="lightbulb-o" size={30} color={Colors.orange}/>
                        </TouchableOpacity>

                        <View style={{flex:1, alignItems: 'center'}}>
                          <TouchableOpacity style={styles.buttonMiddle} onPress={() => {Actions.newcomment({'postId':p.id})}}>
                            <Icon name="comments-o" size={30} color={Colors.orange}/>
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttonRight} onPress={() => {}}>
                          <Icon name="share-alt" size={25} color={Colors.orange}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })
              )
            }):null}
          </ScrollView>
      )
    }
    return (
      <View style= {styles.button}>
        <Button onPress={() => Actions.friends()}>Expand your network</Button>
      </View>
    )
  }

  render() {
        return (
          this.renderView()
        )
    }
}

const styles = StyleSheet.create ({
  lastContainer: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: Colors.white,
  },

  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.white,
},

  containerUser: {
    flex :1, 
    flexDirection: 'row', 
    marginBottom: 20
  },
  avatarSmall: {
    width: 40,
    height: 40,
  },
  name: {
    flex:1, 
    justifyContent:'center'
  },

  containerActions: {
    flex: 1, 
    flexDirection: 'row', 
    marginTop: 10
  },
  buttonLeft: { 
    marginLeft: 25, 
    paddingTop:5
  },
  buttonMiddle: { 
    alignItems: 'center', 
    paddingTop:5
  },
  buttonRight: {
    marginRight: 25,
    paddingTop: 5
  },
  button: {
    flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default connect()(TimelineService);