import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function GithubScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../imagen.png')} />    
      <Text style={styles.paragraph}> ig: charlyesme</Text>
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
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  }

});