import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, TextInput,ListView,  TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/nl-be';
import Colors from '../../Config/theme';

class TimelineService extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: [],
          item: {},
        };   
    }
  
    componentDidMount() {
        this.props.fetchTimeline(this.props.token, this.props.id);
    }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0 && nextProps.error == undefined) {
      this.setState({
        data: nextProps.data,
      });
      console.log(this.state.data);
    }
  }

  render() {

        return (
          <ScrollView style={{flex: 1}}>
            {this.state.data != undefined? this.state.data.map((a, i) => {
              return (
                a.posts.map((p,i) => {
                  return (
                  <View key={i} style={styles.container}>
                    <View style={{flex :1, flexDirection: 'row', marginBottom: 20}}>
                      <View style={{marginRight: 10}}>
                        <Image style={styles.avatarSmall} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                      </View>
                      <View style={{flex:1, justifyContent:'center'}}>
                        <Text>{a.name}</Text>
                      </View>
                    </View>
                    <Text>{p.description}</Text>
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