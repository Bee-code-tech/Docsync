import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import health from '../assets/icons/health.png';
import arrowRight from '../assets/icons/arrow-right.png';

const AIHealthAssessment: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={health} style={styles.headerIcon} />
      <View style={styles.content}>
        <Text style={styles.headerText}>AI-Powered Health Assessment Tool</Text>
        <Text style={styles.description}>
          Uncertain about your health? Enter your symptoms to instantly assess your health with Intelligent Diagnosis Assistance.
        </Text>
        <TouchableOpacity style={styles.assessButton}>
          <Text style={styles.assessButtonText}>Assess my health</Text>
          <Image
            resizeMode="contain"
            source={arrowRight}
            style={styles.assessButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    padding: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(230, 230, 244, 1)',
    width: '100%',
    marginTop: 10,
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: 'black',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  description: {
    fontSize: 14,
    marginBottom: 20, 
    color: 'black',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  assessButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  assessButtonText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 10,
    color: 'black',
    fontFamily: 'SpaceGrotesk-Bold',    
  },
  assessButtonIcon: {
    width: 20,
    height: 20,
  },
});

export default AIHealthAssessment;
