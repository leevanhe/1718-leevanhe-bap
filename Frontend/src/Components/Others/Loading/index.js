import React, {Component} from 'react';
import { ActivityIndicator, View, StyleSheet} from 'react-native';
import Colors from '../../../Config/theme';


const GenerateLoading = (props) => {
  return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.orange} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'

    },
})


export default GenerateLoading;