import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const JSScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../js.png')} />     
        </View>
    )
}

export default JSScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e7e43c',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    logo: {
    height: 200,
    width: 200,
  }

});
  