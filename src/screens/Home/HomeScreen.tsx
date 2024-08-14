import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import NotificationBanner from '../../components/NotificationBanner';
import TreatmentOverview from '../../components/TreatmentOverview';
import DosageInfo from '../../components/DosageInfo';
import NextDoseSchedule from '../../components/NextDoseSchedule';
import AIHealthAssessment from '../../components/AIHealthAssessment';

const HomeScreen = () => {
   return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <NotificationBanner
          name="Emmanuel"
          date="13th January"
          time="4:32 AM"
        />
        <TreatmentOverview
          condition="Bronchitis"
          doctor="Adeleke"
          antibiotic="Azithromycin"
          startDate="Jan 10, 2024"
        />
        <View style={styles.dosageContainer}>
         
        
        </View>
        <AIHealthAssessment />
      </View>
      {/* <Text>
        HomeScreen
      </Text> */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    display: 'flex',
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 16,
  },
  dosageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

export default HomeScreen
