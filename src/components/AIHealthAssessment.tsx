import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import health from '../assets/icons/health.png'
import arrowRight from '../assets/icons/arrow-right.png'

const AIHealthAssessment: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{ uri: health }}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>AI-Powered Health Assessment tool</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Uncertain about your health? Enter your symptoms to instantly assess your health with Intelligent Diagnosis Assistance.
        </Text>
        <TouchableOpacity style={styles.assessButton}>
          <Text style={styles.assessButtonText}>Assess my health</Text>
          <Image
            resizeMode="contain"
            source={{ uri: arrowRight }}
            style={styles.assessButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'rgba(230, 230, 244, 1)',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 12,
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  headerIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 19,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  headerText: {
    alignSelf: 'stretch',
    margin: 'auto',
  },
  content: {
    alignSelf: 'flex-end',
    display: 'flex',
    marginTop: 5,
    width: '100%',
    maxWidth: 230,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  description: {
    fontSize: 9,
    fontWeight: '400',
  },
  assessButton: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignSelf: 'flex-start',
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    fontWeight: '600',
    justifyContent: 'center',
    padding: 10,
  },
  assessButtonText: {
    alignSelf: 'stretch',
    width: 85,
    margin: 'auto',
  },
  assessButtonIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 11,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
});

export default AIHealthAssessment;