import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import plusIcon from '../assets/icons/plus.png'; 
import sampleDrugImage1 from '../assets/icons/drug1.png'; 
import sampleDrugImage2 from '../assets/icons/drug2.png'; 
import sampleDrugImage3 from '../assets/icons/drug3.png'; 

const PharmacyStore: React.FC = () => {
  const drugs = [
    { id: 1, name: 'Cefazolin Sodium 1 gram Powder 25/Pack (RX)', originalPrice: '₦500', discountedPrice: '₦40', image: sampleDrugImage1 },
    { id: 2, name: 'Rocephin Ceftriaxone Injection 1g IV', originalPrice: '₦60', discountedPrice: '₦48', image: sampleDrugImage2 },
    { id: 3, name: 'Levoflaxin Tablets USP 500mg', originalPrice: '₦30', discountedPrice: '₦24', image: sampleDrugImage3 },
    { id: 4, name: 'Drug Name 4', originalPrice: '₦70', discountedPrice: '₦56', image: sampleDrugImage1 },
    { id: 5, name: 'Drug Name 5', originalPrice: '₦90', discountedPrice: '₦72', image: sampleDrugImage2 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Pharmacy & Medicine Store</Text>
          <Text style={styles.subheading}>Access meds & health Products </Text>
          <Text style={styles.subheading}>from the comfort of your home</Text>
        </View>
        <TouchableOpacity style={styles.viewStoreButton}>
          <Text style={styles.viewStoreButtonText}>View Store</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        {drugs.map(drug => (
          <View key={drug.id} style={styles.card}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>20% off</Text>
            </View>
            <Image source={drug.image} style={styles.drugImage} resizeMode="contain" />
            <Text style={styles.drugName}>{drug.name}</Text>
            <View style={styles.spacer} />
            <View style={styles.priceRow}>
              <Text style={styles.originalPrice}>{drug.originalPrice}</Text>
              <Text style={styles.discountedPrice}>{drug.discountedPrice}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Image source={plusIcon} style={styles.plusIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 50,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
    color: 'black',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#777',
  },
  viewStoreButton: {
    backgroundColor: '#4D4AD3',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  viewStoreButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 15,
    display: 'flex',
    width: 190,
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 0.3,
    position: 'relative',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    zIndex: 20,
  },
  discountText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  drugImage: {
    width: '100%',
    height: 120,
    marginBottom: 10,
  },
  drugName: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular',
    marginBottom: 10,
  },
  spacer: {
    flex: 1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: '#4D4AD3',
    borderRadius: 50,
    padding: 5,
  },
  plusIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
});

export default PharmacyStore;
