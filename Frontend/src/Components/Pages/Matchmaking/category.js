import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, TextInput,ListView,  TouchableOpacity, Image } from 'react-native';
import { connect }from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Config/theme';
import {Actions} from 'react-native-router-flux';
import GenerateLoading from '../../Others/Loading/index';
import axios from 'axios';

class CategoryService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloaded: false
    };   
  }

  componentDidMount () {
    this.props.fetchCategories(this.props.token, this.props.id);
  }

componentWillReceiveProps(nextProps) {
    if(nextProps.data.length > 0 && nextProps.error == undefined) {
        this.setState({data: nextProps.data, isloaded: true});
    }
}


  renderView () {
    if(this.state.isloaded) {
      return (  
        <ScrollView style={{flex: 1}}>
            {this.state.data != undefined? this.state.data.map((a, i) => {
              return (
                <View key={i} style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.submitCategory(this.props.token, this.props.id, this.categoryId = a.id);}}>
                    <Text>{a.name}</Text>
                    </TouchableOpacity>
                  </View>
              )
            }): null}
          </ScrollView>
      )
    }
    return(
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

export default CategoryService;