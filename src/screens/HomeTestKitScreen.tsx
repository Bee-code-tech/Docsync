import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Kit from '../components/Kit'

const HomeTestKitScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
      <Header />
      <Kit />
    </View>
    </ScrollView>
  )
}

export default HomeTestKitScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 16
,  }
})