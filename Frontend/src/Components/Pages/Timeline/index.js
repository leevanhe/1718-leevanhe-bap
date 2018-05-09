import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, TextInput,ListView,  TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import Colors from '../../../Config/theme';

import { Actions } from 'react-native-router-flux';

class TimelineService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };   
  }
  
  componentDidMount() {
    this.props.fetchPosts(this.props.token, this.props.id);
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0 && nextProps.error == undefined) {
      this.setState({data: nextProps.data});
      console.log(this.state.data);
    }
  }

  render() {

        return (
          <ScrollView style={{flex: 1}}>
            {this.state.data != undefined? this.state.data.map((a, i) => {
              return (
                a.posts.map((p, i) => {
                  return (
                    <View key={i} style={styles.container}>
                    <TouchableOpacity onPress={() => {}}>
                    <View style={{flex :1, flexDirection: 'row', marginBottom: 20}}>
                      <View style={{marginRight: 10}}>
                        <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                      </View>
                      <View style={{flex:1, justifyContent:'center'}}>
                        <TouchableOpacity onPress={() => {
                          this.props.select(a.id) 
                          this.props.fetch(a.id)
                        }}>
                          <Text>{a.connection.name}</Text>
                          <Text>{a.id}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text>{p.description}</Text>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                      <Text style= {{paddingTop: 2}}>{p.comments_count}</Text>
                      <TouchableOpacity onPress={() => Actions.comments()}>
                        <Icon style={{marginLeft: 5}} name="comments-o" size={20} color={Colors.orange}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10}}>
                      <TouchableOpacity style={{ marginLeft: 25, paddingTop:5}} onPress={() => {}}>
                          <Icon name="lightbulb-o" size={40} color={Colors.orange}/>
                      </TouchableOpacity>
                      <View style={{flex:1, alignItems: 'center'}}>
                        <TouchableOpacity style={{ alignItems: 'center', paddingTop:5}} onPress={() => Actions.comments()}>
                            <Icon name="comments-o" size={40} color={Colors.orange}/>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={{ marginRight: 25, paddingTop:5}} onPress={() => {}}>
                          <Icon name="share-alt" size={35} color={Colors.orange}/>
                      </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                  </View>
                  )
                })
              )
            }): null}
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
  container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.white,
  },
  avatarSmall: {
        width: 40,
        height: 40,
  },
});

export default connect()(TimelineService);