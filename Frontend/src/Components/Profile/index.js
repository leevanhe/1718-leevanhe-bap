import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { connect }from 'react-redux';

import Colors from '../../Config/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from'../Button/index'

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

  test() {
      console.log('tested');
  }

  render() {
    return (
        <ScrollView style={{flex: 1}}>
            {this.state.data.startups != undefined ? this.state.data.startups.map((startup, i) => {
                return (
                    <View key={i} style={styles.info}>
                        <Text style={styles.name}>{startup.name}</Text>
                        <Text>{startup.description}</Text>
                        <Button onPress={() => this.test()}>Read more</Button>
                    </View>
                )
            }): null}

            <View style={styles.div}>
                <Text style={styles.title}>Realisations</Text>
            </View>

            <View style={styles.div}>
                <Text style={styles.title}>Services</Text>
            </View>

        </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    info: {
        flex: 1,
        padding: 10,
        marginTop: 80,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    name: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },

    div: {
        flex: 1,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: 20,
        color: Colors.red 
    }
    
});

export default connect()(ProfileService);