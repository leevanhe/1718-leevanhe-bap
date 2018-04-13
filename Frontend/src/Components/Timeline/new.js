import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Button from '../Button/index';

class NewPostService extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      description: '',
      error: '',
    }
  }

  submit = () => {  

    let data = {
      description: this.state.description
    };
    console.log(data);

    this.setState({error: ''});
    this.props.submitNewPost(this.props.token, this.props.id, JSON.stringify(data));
  }

  render(){  
    return (
        <View style={{flex: 1}}>
            {this.state.error != ''? 
            <View>
                <Text>{this.state.error}</Text>
            </View>
            :null}

            <View>
                <Text>Opmerkingen</Text>
                <View>
                    <TextInput
                    onChangeText={(description) => {this.setState({description})}}
                    value={this.state.description}/>
                </View>              
            </View>

            <View style={{alignItems: 'center'}}>
                <Button onPress={() => this.submit()}>Place</Button>
            </View> 

        </View>
    )

  }
}
    
export default NewPostService;