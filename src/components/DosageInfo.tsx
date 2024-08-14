import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import infoDark from '../assets/icons/info-dark.png'
import doses from '../assets/icons/dose.png'
import time from '../assets/icons/time.png'
import rate from '../assets/icons/rate.png'

type DosageInfoProps = {
  totalDoses: number;
  frequency: string;
  usedDoses: number;
  adherenceRate: number;
  lastDoseTaken: string;
};

const DosageInfo: React.FC<DosageInfoProps> = ({
  totalDoses,
  frequency,
  usedDoses,
  adherenceRate,
  lastDoseTaken,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dosageCard}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Total Doses Prescribed</Text>
            <Image
              resizeMode="contain"
            source={{ uri: infoDark}}
            style={styles.cardIcon}
          />
        </View>
        <View style={styles.dosageInfo}>
          <Image
            resizeMode="contain"
            source={{ uri: doses }}
            style={styles.dosageIcon}
          />
          <Text style={styles.dosageText}>{totalDoses} doses</Text>
        </View>
      </View>
      <View style={styles.frequencyInfo}>
        <Image
          resizeMode="contain"
          source={{ uri: time}}
          style={styles.frequencyIcon}
        />
        <Text style={styles.frequencyText}>{frequency}</Text>
      </View>
    </View>
    <View style={styles.dosageCard}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Total Doses Used</Text>
          <Image
            resizeMode="contain"
            source={{ uri: infoDark}}
            style={styles.cardIcon}
          />
        </View>
        <View style={styles.dosageInfo}>
          <Image
            resizeMode="contain"
            source={{ uri: doses }}
            style={styles.dosageIcon}
          />
          <Text style={styles.dosageText}>{usedDoses} doses</Text>
        </View>
      </View>
      <View style={styles.adherenceInfo}>
        <Text style={styles.adherenceLabel}>Adherence Rate</Text>
        <View style={styles.adherenceRate}>
          <Image
            resizeMode="contain"
            source={{ uri: rate }}
            style={styles.adherenceIcon}
          />
          <Text style={styles.adherenceText}>{adherenceRate}%</Text>
        </View>
      </View>
    </View>
    <View style={styles.lastDoseInfo}>
      <Image
        resizeMode="contain"
        source={{ uri: time }}
        style={styles.lastDoseIcon}
      />
      <Text style={styles.lastDoseText}>
        Last Dose Taken: <Text style={styles.lastDoseDate}>{lastDoseTaken}</Text>
      </Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 15,
    alignItems: 'flex-start',
    gap: 10,
    fontFamily: 'Space Grotesk, sans-serif',
    justifyContent: 'flex-start',
  },
  dosageCard: {
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    borderColor: '3px solid rgba(236, 236, 236, 1)',
    width: 135,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    fontSize: 7,
    color: 'rgba(32, 32, 32, 0.8)',
    fontWeight: '500',
    justifyContent: 'center',
  },
  cardTitle: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  cardIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 7,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  dosageInfo: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    fontSize: 10,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '700',
    justifyContent: 'flex-start',
  },
  dosageIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 10,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  dosageText: {
    alignSelf: 'stretch',
    width: 49,
    margin: 'auto',
  },
  frequencyInfo: {
    borderRadius: 100,
    alignSelf: 'flex-start',
    display: 'flex',
    marginTop: 5,
    alignItems: 'flex-start',
    gap: 2,
    fontSize: 6,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    justifyContent: 'flex-start',
    padding: 10,
  },
  frequencyIcon: {
    position: 'relative',
    display: 'flex',
    width: 6,
    flexShrink: 0,
    aspectRatio: 1,
  },
  frequencyText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  adherenceInfo: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    color: 'rgba(0, 0, 0, 1)',
    justifyContent: 'flex-start',
  },
  adherenceLabel: {
    alignSelf: 'stretch',
    gap: 5,
    fontSize: 4,
    fontWeight: '500',
    margin: 'auto',
  },
  adherenceRate: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontSize: 5,
    fontWeight: '700',
    justifyContent: 'flex-start',
    margin: 'auto',
  },
  adherenceIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 4,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  adherenceText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  lastDoseInfo: {
    borderRadius: 100,
    display: 'flex',
    marginTop: 5,
    alignItems: 'flex-start',
    gap: 2,
    fontSize: 6,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    justifyContent: 'flex-start',
    padding: 10,
  },
  lastDoseIcon: {
    position: 'relative',
    display: 'flex',
    width: 6,
    flexShrink: 0,
    aspectRatio: 1,
  },
  lastDoseText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  lastDoseDate: {
    fontWeight: '700',
  },
});

export default DosageInfo;