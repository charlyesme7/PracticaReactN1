import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Contacto2(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Informacion del contacto 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ff0000',
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

});