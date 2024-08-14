import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import info from '../assets/icons/info.png'
import progress from '../assets/icons/progress.png'
import badge from '../assets/icons/badge.png'

type NextDoseScheduleProps = {
  nextDoseDate: string;
  nextDoseTime: string;
  remainingDoses: number;
  scheduleDates: string[];
};

const NextDoseSchedule: React.FC<NextDoseScheduleProps> = ({
  nextDoseDate,
  nextDoseTime,
  remainingDoses,
  scheduleDates,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nextDoseInfo}>
        <View style={styles.nextDoseHeader}>
          <Text style={styles.nextDoseLabel}>Next Scheduled Dose:</Text>
          <Image
            resizeMode="contain"
            source={{ uri: info }}
            style={styles.nextDoseIcon}
          />
        </View>
        <Text style={styles.nextDoseDateTime}>{nextDoseDate} by {nextDoseTime}</Text>
      </View>
      <View style={styles.remainingDosesInfo}>
        <Image
          resizeMode="contain"
          source={{ uri: progress }}
          style={styles.remainingDosesIcon}
        />
        <Text style={styles.remainingDosesText}>Remaining Doses: {remainingDoses} Doses</Text>
      </View>
      <View style={styles.scheduleContainer}>
        {scheduleDates.map((date, index) => (
          <View key={index} style={styles.scheduleItem}>
            {index === 2 && (
              <Image
                resizeMode="contain"
                source={{ uri: badge }}
                style={styles.currentDateIcon}
              />
            )}
            <View style={styles.dateContainer}>
              <View style={styles.dateDot} />
            </View>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 15,
    alignItems: 'center',
    gap: 20,
    justifyContent: 'flex-start',
  },
  nextDoseInfo: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Space Grotesk, sans-serif',
    color: 'rgba(255, 255, 255, 1)',
    justifyContent: 'flex-start',
    width: 117,
    margin: 'auto',
  },
  nextDoseHeader: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    fontSize: 7,
    fontWeight: '500',
    justifyContent: 'center',
  },
  nextDoseLabel: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  nextDoseIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 7,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  nextDoseDateTime: {
    fontSize: 10,
    fontWeight: '700',
  },
  remainingDosesInfo: {
    display: 'flex',
    marginTop: 7,
    alignItems: 'flex-start',
    gap: 5,
    fontSize: 7,
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  remainingDosesIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 7,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  remainingDosesText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  scheduleContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
    justifyContent: 'flex-start',
    margin: 'auto',
  },
  scheduleItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    borderRadius: 10,
    display: 'flex',
    width: 13,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  dateDot: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    flexShrink: 0,
    height: 40,
  },
  dateText: {
    marginTop: 5,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: ' SpaceGrotesk-Regular, sans-serif',
  },
  currentDateIcon: {
    borderRadius: 4,
    position: 'relative',
    display: 'flex',
    width: 23,
    aspectRatio: 1.35,
  },
});

export default NextDoseSchedule;