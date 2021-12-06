import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Iniciocreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Film Shop</Text>
      <Image style={styles.logo} source={require('../logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 500,
    width: 300,
  }

});