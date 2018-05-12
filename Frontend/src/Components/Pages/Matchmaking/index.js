import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, TextInput,ListView,  TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/nl-be';
import Colors from '../../../Config/theme';
import {Actions} from 'react-native-router-flux';
import GenerateLoading from '../../Others/Loading/index';

class MatchmakingService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloaded: false
    };   
  }
  
  componentDidMount() {
    this.props.fetchMatchmaking(this.props.token, this.props.id);
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
            {this.state.data != undefined? this.state.data.map((a, i) => {
              return (
                a.services.map((s,i) => {
                  return (
                  <View key={i} style={styles.container}>
                    <TouchableOpacity onPress={() => {Actions.detailMatchmaking({'matchmakingId':s.id})}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{marginRight: 10}}>
                            <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{fontWeight: 'bold'}}>{s.title}</Text>
                            <Text numberOfLines={1}>{s.description}</Text>
                        </View>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                        <Icon style={{marginRight: 5}} name="calendar" size={20} color={Colors.orange}/>
                        <Text style= {{paddingTop: 2}}>{moment(s.updated_at).fromNow()}</Text>    
                        <Icon style={{marginRight: 5, marginLeft: 20}} name="map-marker" size={20} color={Colors.orange}/>
                        <Text style= {{paddingTop: 2}}>{s.city}</Text>    
                      </View>
                    </TouchableOpacity>
                  </View>
                  )
                })
              )
            }): null}
          </ScrollView>
      )
    }
    return (
      <GenerateLoading/>
    )
  }

  render() {
    return (
      this.renderView()  
    );
  }
}

const styles = StyleSheet.create ({
  container: {
        flex: 1,
        padding: 20,
        marginTop: 10,
        backgroundColor: Colors.white,
  },
  avatarSmall: {
        width: 40,
        height: 40,
  },
});

export default connect()(MatchmakingService);