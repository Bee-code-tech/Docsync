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
  isHorizontal: boolean;
};

const NextDoseSchedule: React.FC<NextDoseScheduleProps> = ({
  nextDoseDate,
  nextDoseTime,
  remainingDoses,
  scheduleDates,
  isHorizontal,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: isHorizontal ? 55 : 5, // Adjust marginTop based on layout direction
        },
        isHorizontal ? styles.horizontal : styles.vertical,
      ]}
    >
      <View style={styles.leftBox}>
        <View style={styles.nextDoseInfo}>
          <View style={styles.nextDoseHeader}>
            <Text
              style={[
                styles.nextDoseLabel,
                !isHorizontal && styles.verticalNextDoseLabel, // Increase font size in vertical mode
              ]}
            >
              Next Scheduled Dose:
            </Text>
            <Image resizeMode="contain" source={info} style={styles.nextDoseIcon} />
          </View>
          <Text
            style={[
              styles.nextDoseDateTime,
              !isHorizontal && styles.verticalNextDoseDateTime, // Increase font size in vertical mode
            ]}
          >
            {nextDoseDate} by {nextDoseTime}
          </Text>
        </View>
        <View
          style={[
            styles.remainingDosesBadge,
            !isHorizontal && styles.verticalRemainingDosesBadge, // Adjust badge width in vertical mode
          ]}
        >
          <Image resizeMode="contain" source={progress} style={styles.remainingDosesIcon} />
          <Text style={styles.remainingDosesText}>Remaining Doses: {remainingDoses} Doses</Text>
        </View>
      </View>

      <View
        style={[
          styles.rightBox,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: !isHorizontal ? 'center' : 'flex-end',
            marginLeft: isHorizontal ? 10 : 0,
          },
        ]}
      >
        {scheduleDates.map((date, index) => (
          <View key={index} style={styles.scheduleItem}>
            <View style={[styles.barContainer, isHorizontal ? styles.horizontalBar : styles.verticalBar]}>
              <View style={styles.bar} />
              {index === 2 && (
                <Image
                  resizeMode="contain"
                  source={badge}
                  style={styles.currentDateIcon}
                />
              )}
            </View>
            <Text
              style={[
                styles.dateText,
                !isHorizontal && styles.verticalDateText, // Increase date text size in vertical mode
              ]}
            >
              {date}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  vertical: {
    flexDirection: 'column',
    alignItems: 'center', // Center content in vertical mode
  },
  leftBox: {
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center', // Center content in vertical mode
  },
  nextDoseInfo: {
    marginBottom: 20,
    alignItems: 'center', // Center content in vertical mode
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
  verticalNextDoseLabel: {
    fontSize: 14, // Increase font size in vertical mode
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
    marginBottom: 10,
  },
  verticalNextDoseDateTime: {
    fontSize: 20, // Increase font size in vertical mode
  },
  remainingDosesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(112, 110, 220, 1)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 6,
    alignSelf: 'center', // Center the badge in vertical mode
  },
  verticalRemainingDosesBadge: {
    width: 'auto', // Make the badge width fit its content
    marginBottom: 50,
    marginTop: -20,
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
    flex: 1,
  },
  scheduleItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    marginRight: 5,
  },
  barContainer: {
    width: 20,
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    position: 'relative',
  },
  horizontalBar: {
    height: 60, // Regular height for horizontal mode
  },
  verticalBar: {
    height: 90, // Increased height for vertical mode
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
  verticalDateText: {
    fontSize: 14, // Increase date text size in vertical mode
    marginBottom: 20, // Increase bottom margin in vertical mode
  },
  currentDateIcon: {
    width: 45,
    height: 35,
    position: 'absolute',
    top: -45,
    left: '50%',
    transform: [{ translateX: -22.5 }],
  },
});

export default NextDoseSchedule;
