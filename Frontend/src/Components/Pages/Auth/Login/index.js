import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect }from 'react-redux';
import Colors from '../../../../Config/theme';

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
   
  componentWillReceiveProps(nextProps) {
    if(nextProps.error != undefined){
      this.error = nextProps.error;
      this.errorActive = true;
        Alert.alert(this.error)
    } 
  }

  submit = () => {
    this.props.login(JSON.stringify(this.state));
  }

  render() {
    return (
      <View  style={styles.container}>
        <TextInput placeholder="username" autoCapitalize="none" style={styles.textInput} onChangeText={(username) => {this.setState({username})}} value={this.state.username}/>
        <TextInput placeholder="password" autoCapitalize="none" secureTextEntry={true} style={styles.textInput} onChangeText={(password) => this.setState({password})} value={this.state.password}/>

        <TouchableOpacity style={styles.button} onPress={() => {this.props.login(JSON.stringify(this.state))}}>
          <Text style={styles.buttonText}>Login</Text>
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
  textInput: {
      marginBottom: 15,
      height: 40,
      width: 300,
      borderColor: 'white',
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white'
  },
  button: {
      alignItems: 'center',
      backgroundColor: Colors.white,
      padding: 10,
      marginTop: 20,
      width: 300,
  },
  buttonText: {
      fontSize: 20,
      color: Colors.red,
  }
});


export default connect()(LoginService);