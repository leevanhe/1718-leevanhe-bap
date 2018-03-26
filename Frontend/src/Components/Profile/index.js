import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { connect }from 'react-redux';

import Colors from '../../Config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileService extends Component {
  constructor(props) {
        super(props);
        this.state = {
          data: {},
        }
  }
  
  componentDidMount() {
      this.props.fetchProfile(this.props.token);
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps.error == undefined) {
      this.setState({data: nextProps.data});
    }   
  }

  render() {
    return (
        <View>
            {this.state.data.startups != undefined ? this.state.data.startups.map((startup, i) => {
                return (
                    <View key={i}>
                        <Text>{startup.name}</Text>
                    </View>
                )
            }): null}
        </View>
        );
    }
}

export default connect()(ProfileService);