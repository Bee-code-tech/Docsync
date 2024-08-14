import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import TreatmentOverview from '../../components/TreatmentOverview'
import Call from '../../components/Call'

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
          endDate='Jan 15, 2024'
          orientation={false}
        />
        <Call />
       
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
    paddingHorizontal: 16,
    paddingBottom: 100,
  }
})