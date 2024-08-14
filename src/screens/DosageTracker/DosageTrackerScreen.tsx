import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import TreatmentOverview from '../../components/TreatmentOverview'

const DosageTrackerScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>

    <View>
      <Header />
        <TreatmentOverview
          condition="Bronchitis"
          doctor="Adeleke"
          antibiotic="Azithromycin"
          startDate="Jan 10, 2024"
        />
    </View>
    </ScrollView>
  )
}

export default DosageTrackerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 16
,  }
})