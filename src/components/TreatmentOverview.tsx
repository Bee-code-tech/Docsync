import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import refresh from '../assets/icons/refresh.png'
import info from '../assets/icons/info.png'
import verified from '../assets/icons/verified.png'

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
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Current Treatment Overview</Text>
          <Image
            resizeMode="contain"
            source={{ uri: info }}
            style={styles.titleIcon}
          />
        </View>
        <View style={styles.updateButton}>
          <Text style={styles.updateText}>Update</Text>
          <Image
            resizeMode="contain"
            source={{ uri: refresh }}
            style={styles.updateIcon}
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailColumn}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Health Condition</Text>
            <Text style={styles.detailValue}>{condition}</Text>
          </View>
          <View style={styles.diagnosisContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: verified}}
              style={styles.diagnosisIcon}
            />
            <Text style={styles.diagnosisText}>Diagnosis by Dr {doctor}</Text>
          </View>
        </View>
        <View style={styles.detailColumn}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Prescribed Antibiotic</Text>
            <Text style={styles.detailValue}>{antibiotic}</Text>
          </View>
          <View style={styles.diagnosisContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: verified }}
              style={styles.diagnosisIcon}
            />
            <Text style={styles.diagnosisText}>As prescribed by Dr. {doctor}</Text>
          </View>
        </View>
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Start Date: </Text>
          <Text style={styles.detailValue}>{startDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'rgba(77, 74, 211, 1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
    borderColor: 'rgba(112, 110, 220, 1)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: '700',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    margin: 'auto',
  },
  title: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  titleIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 7,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  updateButton: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    overflow: 'hidden',
    fontSize: 9,
    color: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    margin: 'auto',
    padding: 8,
  },
  updateText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  updateIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 10,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  detailsContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    marginTop: 15,
    alignItems: 'flex-start',
    gap: 15,
    fontFamily: 'SpaceGrotesk-Regular, sans-serif',
    color: 'rgba(255, 255, 255, 1)',
    justifyContent: 'flex-start',
  },
  detailColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: 85,
  },
  detailItem: {
    display: 'flex',
    width: 85,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  detailLabel: {
    fontSize: 8,
    fontWeight: '400',
  },
  detailValue: {
    fontSize: 12,
    fontWeight: '700',
  },
  diagnosisContainer: {
    borderRadius: 100,
    backgroundColor: 'rgba(112, 110, 220, 1)',
    display: 'flex',
    marginTop: 5,
    alignItems: 'center',
    gap: 2,
    fontSize: 6,
    fontWeight: '600',
    justifyContent: 'center',
    padding: 2,
  },
  diagnosisIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 7,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  diagnosisText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
});

export default TreatmentOverview;