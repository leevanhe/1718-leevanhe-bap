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
    this.props.fetchComments(this.props.token, this.props.id, this.props.postId);
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0 && nextProps.error == undefined) {
      this.setState({data: nextProps.data});
    }
  }

  render() {

        return (
          <ScrollView style={{flex: 1}}>
            {this.state.data != undefined? this.state.data.map((comment, i) => {
              return (
                <View style={{flex: 1}}>
                  <Text style={{marginTop: 10}}>{comment.description}</Text>
                </View>
              )
            }):null}
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