import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../Config/theme';

const TabIcon = (props) => {
  return (
    <View style={{marginTop: 5, flex: 1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
      <Icon name={props.iconName} size={20} color={Colors.white}/>
    </View>
  );
}

TabIcon.propTypes = {
  iconName: PropTypes.string,
};

export default TabIcon;