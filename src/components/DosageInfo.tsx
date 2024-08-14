import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import infoDark from '../assets/icons/info-dark.png';
import doses from '../assets/icons/dose.png';
import time from '../assets/icons/time.png';
import rate from '../assets/icons/rate.png';

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
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Total Doses Prescribed</Text>
          <Image resizeMode="contain" source={infoDark} style={styles.cardIcon} />
        </View>
        <View style={styles.dosageInfo}>
          <Image resizeMode="contain" source={doses} style={styles.dosageIcon} />
          <Text style={styles.dosageText}>{totalDoses} doses</Text>
        </View>
        <View style={styles.badge}>
          <Image resizeMode="contain" source={time} style={styles.badgeIcon} />
          <Text style={styles.badgeText}>{frequency}</Text>
        </View>
      </View>
      
      <View style={styles.dosageCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Total Doses Used</Text>
          <Image resizeMode="contain" source={infoDark} style={styles.cardIcon} />
        </View>
        <View style={styles.dosageInfo}>
          <Image resizeMode="contain" source={doses} style={styles.dosageIcon} />
          <Text style={styles.dosageText}>{usedDoses} doses</Text>
        </View>
        <View style={styles.adherenceInfo}>
          <Text style={styles.adherenceLabel}>Adherence Rate</Text>
          <View style={styles.adherenceRate}>
            <Image resizeMode="contain" source={rate} style={styles.adherenceIcon} />
            <Text style={styles.adherenceText}>{adherenceRate}%</Text>
          </View>
        </View>
        <View style={styles.badge}>
          <Image resizeMode="contain" source={time} style={styles.badgeIcon} />
          <Text style={styles.badgeText}>Last Dose: {lastDoseTaken}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 25,
  },
  dosageCard: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(236, 236, 236, 1)',
    height: 'auto',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Bold',
    marginRight: 5,
  },
  cardIcon: {
    width: 9,
    height: 9,
  },
  dosageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dosageIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  dosageText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  badge: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(112, 110, 220, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  badgeIcon: {
    width: 9,
    height: 9,
    marginRight: 2,
  },
  badgeText: {
    fontSize: 7,
    color: '#FFFFFF',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  adherenceInfo: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    color: 'black'
    
  },
  adherenceLabel: {
    fontSize: 8,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk-Regular',
    color: 'black'
  },
  adherenceRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adherenceIcon: {
    width: 8,
    height: 8,
    marginRight: 5,
    marginLeft: 5,
  },
  adherenceText: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Regular',
  },
});

export default DosageInfo;
