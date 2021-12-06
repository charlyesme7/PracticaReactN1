import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AcercadeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Mi nombre es carlos, soy estudiante de Instituto Tecnologico de Tijuana</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#54e500',
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