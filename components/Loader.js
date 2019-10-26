import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default Loader = ({ id, title, cards }) => {
  return (<View style={styles.container}>
    <ActivityIndicator color='#2196F3' size={35} />
    <Text style={styles.text}>Fetching data ...</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { padding: 15 }
});