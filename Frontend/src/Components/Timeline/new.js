import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Button from '../Button/index';

class NewPostService extends Component{  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      description: '',
      error: '',
    }
  }

  componentDidMount() {
    this.props.fetchUserdata(this.props.token,this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0 && nextProps.error == undefined) {
      this.setState({data: nextProps.data});
      console.log(this.state.data);
    }
  }

  render(){  
    return (
        <View style={{flex: 1}}>
            {this.state.error != ''? 
            <View>
                <Text>{this.state.error}</Text>
            </View>
            :null}

            {this.state.data != undefined? this.state.data.map((a,i)=>{
              return(
                <View>
                  <Text>a.name</Text>
                </View>
              );
            }): null}

            <View>
                <Text>Opmerkingen</Text>
                <View>
                    <TextInput
                    placeholder="hier komt tekst"
                    />
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