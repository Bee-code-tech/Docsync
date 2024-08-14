import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface DrugProps {
  category: string;
}

const Drug: React.FC<DrugProps> = ({ category }) => {
  const navigation = useNavigation();
  const drugs = [
    { id: 1, name: 'Checkable UTI diagnostic Screening Kit (3 Count)', image: require('../assets/icons/drug1.png'), price: '₦2,000' },
    { id: 2, name: 'Checkable UTI diagnostic Screening Kit (3 Count)', image: require('../assets/icons/drug2.png'), price: '₦2,500' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {drugs.map(drug => (
          <TouchableOpacity
            key={drug.id}
            style={styles.card}
            // onPress={() => navigation.navigate('DrugDetail', { drugId: drug.id })}
          >
            <View style={styles.imageContainer}>
              <Image source={drug.image} style={styles.image} />
            </View>
            <Text style={styles.name}>{drug.name}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Test for Pneumonia</Text>
            </View>
            <Text style={styles.price}>{drug.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
    color: 'black',
  },
  seeAllButton: {
    backgroundColor: '#4D4AD3',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  seeAllText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',  // Adjust width to fit two cards in a row
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '80%',  // Control the width of the image within the container
    height: '80%',  // Control the height of the image within the container
    resizeMode: 'contain', // Ensure the image fits within the container
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
    marginBottom: 5,
    color: 'black',
  },
  badge: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
  },
  price: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#000',
  },
});

export default Drug;
