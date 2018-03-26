import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { connect }from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon  from 'react-native-vector-icons/FontAwesome';
import store from '../../../Reducers/index';
import Colors from '../../../Config/theme';

class LoginService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    error = "";
    errorActive = false;
  }
  componentDidMount() {}   
  componentWillReceiveProps(nextProps) {
    if(nextProps.error != undefined){
      this.error = nextProps.error;
      this.errorActive = true;
    } 
  }
  
      render() {
        return (
          <View  style={styles.container}>
            {this.errorActive == true ? <Text style={styles.error}>{this.error}</Text> : null}

            <TextInput placeholder="username" autoCapitalize="none" style={styles.textInput} onChangeText={(username) => {this.setState({username})}} value={this.state.username}/>
            <TextInput placeholder="password" autoCapitalize="none" secureTextEntry={true} style={styles.textInput} onChangeText={(password) => this.setState({password})} value={this.state.password}/>

            <TouchableOpacity style={styles.btn} onPress={() => {this.props.login(JSON.stringify(this.state)); }}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
  },
  label: {
      fontWeight: '800',
      color: Colors.darkgrey,
      marginBottom:0
  },
  textInput: {
      marginBottom: 15,
      height: 40,
      width: 300,
      borderColor: 'white',
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white'
  },
  error: {
      color: '#efefef',
      textAlign: 'center',
      fontWeight: '800',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: 'red',
      padding: 5
  },
  btn: {
      alignItems: 'center',
      backgroundColor: Colors.white,
      padding: 10,
      marginTop: 20,
      width: 300,
  },
  btnText: {
      fontSize: 20,
      color: Colors.red,
  }
});


export default connect()(LoginService);