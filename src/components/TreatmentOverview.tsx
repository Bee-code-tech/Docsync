import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import refresh from '../assets/icons/refresh.png';
import info from '../assets/icons/info.png';
import verified from '../assets/icons/verified.png';
import DosageInfo from './DosageInfo';
import NextDoseSchedule from './NextDoseSchedule';

type TreatmentOverviewProps = {
  condition: string;
  doctor: string;
  antibiotic: string;
  startDate: string;
};

const TreatmentOverview: React.FC<TreatmentOverviewProps> = ({
  condition,
  doctor,
  antibiotic,
  startDate,
}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Current Treatment Overview</Text>
          <Image
            resizeMode="contain"
            source={info}
            style={styles.titleIcon}
          />
        </View>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateText}>Update</Text>
          <Image
            resizeMode="contain"
            source={refresh}
            style={styles.updateIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* First Column */}
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Health Condition</Text>
          <Text style={styles.detailValue}>{condition}</Text>
          <View style={styles.diagnosisContainer}>
            <Image
              resizeMode="contain"
              source={verified}
              style={styles.diagnosisIcon}
            />
            <Text style={styles.diagnosisText}>Diagnosis by Dr. {doctor}</Text>
          </View>
        </View>

        {/* Second Column */}
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Prescribed Antibiotic</Text>
          <Text style={styles.detailValue}>{antibiotic}</Text>
          <View style={styles.diagnosisContainer}>
            <Image
              resizeMode="contain"
              source={verified}
              style={styles.diagnosisIcon}
            />
            <Text style={styles.diagnosisText}>As prescribed by Dr. {doctor}</Text>
          </View>
        </View>

        {/* Third Column */}
        <View style={styles.detailColumnThree}>
          <Text style={styles.detailLabelThree}>Start Date</Text>
          <Text style={styles.detailValueThree}>{startDate}</Text>
        </View>
      </View>

       <DosageInfo
            totalDoses={10}
            frequency="1 pill every 12 hours"
            usedDoses={5}
            adherenceRate={50}
            lastDoseTaken="January 13, 4:32 PM"
          />
         
           <NextDoseSchedule
            nextDoseDate="Jan 13, 2024"
            nextDoseTime="4:32 AM"
            remainingDoses={7}
            scheduleDates={['Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15']}
          />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'rgba(77, 74, 211, 1)',
    padding: 14,
    borderColor: 'rgba(112, 110, 220, 1)',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold'
  },
  titleIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
    marginTop: 8,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  updateText: {
    fontSize: 14,
    fontWeight: '200',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  updateIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 7
    // backgroundColor: 'red'
  },
  detailColumn: {
    flex: 1,
    // marginRight:,
    alignItems: 'flex-start',
    // justifyContent: 'center'
    // backgroundColor: 'red'
  },
  detailColumnThree: {
    flex: 1,
    marginLeft: 1,
    alignItems: 'flex-start',
    // justifyContent: 'center'
    // backgroundColor: 'red'
  },
  detailLabelThree: {
    fontSize: 11,
    color: '#FFFFFF',
    marginBottom: 0,
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular'
  },
  detailLabel: {
    fontSize: 11,
    color: '#FFFFFF',
    marginBottom: 0,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular'
  },
  detailValueThree: {
    fontSize: 14,
    color: '#FFFFFF',
     marginLeft: 10,
    fontWeight: '600',
    marginBottom: 3,
    fontFamily: 'SpaceGrotesk-Bold'
  },
  detailValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 3,
    fontFamily: 'SpaceGrotesk-Bold'
  },
  diagnosisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(112, 110, 220, 1)',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  diagnosisIcon: {
    width: 10,
    height: 10,
    marginRight: 1,
  },
  diagnosisText: {
    fontSize: 7,
    color: '#FFFFFF',
    fontFamily: 'SpaceGrotesk-Bold'
  },
});

export default TreatmentOverview;
