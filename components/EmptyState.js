import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default EmptyState = () => {
  return (<View
    style={styles.mainContainer}>
    <View style={styles.upperContainer}>
      <View />
      <View>
        <AntDesign name='arrowup' color='gray' size={55} />
      </View>
    </View>
    <View style={styles.downerContainer}>
      <AntDesign name='warning' color='gray' size={65} style={styles.warnIcon} />
      <Text style={styles.upperText}>No decks availables.</Text>
      <Text style={styles.downerText}>Please go to the NEW DECK tab to add one.</Text>
    </View>
    <View style={styles.spacer} />
  </View>)
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF'
  },
  upperContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  downerContainer: {
    alignItems: 'center',
    padding: 20
  },
  warnIcon: { padding: 15 },
  upperText: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 5
  },
  downerText: { textAlign: 'center' },
  spacer: { flex: 3 }
});