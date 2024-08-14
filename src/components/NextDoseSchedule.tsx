import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import info from '../assets/icons/info.png';
import progress from '../assets/icons/progress.png';
import badge from '../assets/icons/badge.png';

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
      <View style={styles.leftBox}>
        <View style={styles.nextDoseInfo}>
          <View style={styles.nextDoseHeader}>
            <Text style={styles.nextDoseLabel}>Next Scheduled Dose:</Text>
            <Image resizeMode="contain" source={info} style={styles.nextDoseIcon} />
          </View>
          <Text style={styles.nextDoseDateTime}>
            {nextDoseDate} by {nextDoseTime}
          </Text>
        </View>
        <View style={styles.remainingDosesBadge}>
          <Image resizeMode="contain" source={progress} style={styles.remainingDosesIcon} />
          <Text style={styles.remainingDosesText}>Remaining Doses: {remainingDoses} Doses</Text>
        </View>
      </View>

      <View style={styles.rightBox}>
        {scheduleDates.map((date, index) => (
          <View key={index} style={styles.scheduleItem}>
            <View style={styles.barContainer}>
              <View style={styles.bar} />
              {index === 2 && (
                <Image
                  resizeMode="contain"
                  source={badge}
                  style={styles.currentDateIcon}
                />
              )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    marginTop: 55,
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginBottom: 20
  },
  leftBox: {
    flex: 1,
    marginRight: 10,
  },
  nextDoseInfo: {
    marginBottom: 10,
  },
  nextDoseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nextDoseLabel: {
    marginRight: 5,
    fontSize: 10,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  nextDoseIcon: {
    width: 14,
    height: 14,
  },
  nextDoseDateTime: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
    color: 'white',

  },
  remainingDosesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(112, 110, 220, 1)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 6,
  },
  remainingDosesIcon: {
    width: 8,
    height: 8,
    marginRight: 5,
  },
  remainingDosesText: {
    fontSize: 9,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular',
    color: 'white',
  },
  rightBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  scheduleItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',  // Ensure the bar container is positioned relatively
  },
  barContainer: {
    width: 20,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    marginBottom: 5,
    position: 'relative', // To position the badge absolutely within this container
  },
  bar: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  dateText: {
    fontSize: 10,
    fontFamily: 'SpaceGrotesk-Regular',
    color: 'white',
    marginTop: 3,
  },
  currentDateIcon: {
    width: 45,
    height: 35,
    position: 'absolute',
    top: -45,
    left: '50%',
    transform: [{ translateX: -22.5 }], // Centers the badge horizontally on the bar
  },
});

export default NextDoseSchedule;
