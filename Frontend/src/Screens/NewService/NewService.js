import React, { Component } from 'react';
import { View } from 'react-native';
import NewSerivceSevice from '../../Actions/NewService/NewServiceActions';

class NewService extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <NewSerivceSevice/>
        </View>
    );
  }
}

export default NewService;