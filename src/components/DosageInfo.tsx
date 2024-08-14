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
  isHorizontal: boolean;
};

const DosageInfo: React.FC<DosageInfoProps> = ({
  totalDoses,
  frequency,
  usedDoses,
  adherenceRate,
  lastDoseTaken,
  isHorizontal,
}) => {
  return (
    <View style={[styles.container, isHorizontal ? styles.horizontal : styles.vertical]}>
      <View style={[styles.dosageCard, !isHorizontal && styles.verticalCard]}>
        <View style={styles.cardHeader}>
          <Text style={[styles.cardTitle, !isHorizontal && styles.verticalCardTitle]}>
            Total Doses Prescribed
          </Text>
          <Image resizeMode="contain" source={infoDark} style={styles.cardIcon} />
        </View>
        <View style={styles.dosageInfo}>
          <Image resizeMode="contain" source={doses} style={styles.dosageIcon} />
          <Text style={[styles.dosageText, !isHorizontal && styles.verticalDosageText]}>
            {totalDoses} doses
          </Text>
        </View>
        <View style={[styles.badge, !isHorizontal && styles.verticalBadge]}>
          <Image resizeMode="contain" source={time} style={styles.badgeIcon} />
          <Text style={styles.badgeText}>{frequency}</Text>
        </View>
      </View>

      <View style={[styles.dosageCard, !isHorizontal && styles.verticalCard]}>
        <View style={styles.cardHeader}>
          <Text style={[styles.cardTitle, !isHorizontal && styles.verticalCardTitle]}>
            Total Doses Used
          </Text>
          <Image resizeMode="contain" source={infoDark} style={styles.cardIcon} />
        </View>
        <View style={styles.dosageInfo}>
          <Image resizeMode="contain" source={doses} style={styles.dosageIcon} />
          <Text style={[styles.dosageText, !isHorizontal && styles.verticalDosageText]}>
            {usedDoses} doses
          </Text>
        </View>
        <View style={styles.adherenceInfo}>
          <Text style={[styles.adherenceLabel, !isHorizontal && styles.verticalAdherenceLabel]}>
            Adherence Rate
          </Text>
          <View style={styles.adherenceRate}>
            <Image resizeMode="contain" source={rate} style={styles.adherenceIcon} />
            <Text style={[styles.adherenceText, !isHorizontal && styles.verticalAdherenceText]}>
              {adherenceRate}%
            </Text>
          </View>
        </View>
        <View style={[styles.badge, !isHorizontal && styles.verticalBadge]}>
          <Image resizeMode="contain" source={time} style={styles.badgeIcon} />
          <Text style={styles.badgeText}>Last Dose: {lastDoseTaken}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
  },
  vertical: {
    flexDirection: 'column',
  },
  dosageCard: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(236, 236, 236, 1)',
    height: 'auto',
    marginBottom: 10, // Added margin for vertical layout
  },
  verticalCard: {
    marginBottom: 20, // Larger margin for vertical layout
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
  verticalCardTitle: {
    fontSize: 14, // Increased font size for vertical layout
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
  verticalDosageText: {
    fontSize: 30, // Increased font size for vertical layout
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
  verticalBadge: {
    width: 'auto', // Ensure the badge width fits its content
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
  },
  adherenceLabel: {
    fontSize: 8,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk-Regular',
    color: 'black',
  },
  verticalAdherenceLabel: {
    fontSize: 10, // Increased font size for vertical layout
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
  verticalAdherenceText: {
    fontSize: 11, // Increased font size for vertical layout
  },
});

export default DosageInfo;
