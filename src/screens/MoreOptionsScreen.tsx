
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainTabsParamList } from '../navigation/MainTabs';  

const MoreOptionsScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation<NavigationProp<MainTabsParamList>>();  // Use the navigation prop

  const navigateTo = (screen: keyof MainTabsParamList) => { 
    setModalVisible(false);
    navigation.navigate(screen);  
  };

  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.overlay} onPress={() => setModalVisible(false)}>
          <View style={styles.moreModal}>
            <TouchableOpacity onPress={() => navigateTo('YourOrders')} style={styles.modalButton}>
              <Ionicons name="cart" size={24} color="#800080" />
              <Text style={styles.modalButtonText}>Your Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Settings')} style={styles.modalButton}>
              <Ionicons name="settings" size={24} color="#800080" />
              <Text style={styles.modalButtonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Help')} style={styles.modalButton}>
              <Ionicons name="help-circle" size={24} color="#800080" />
              <Text style={styles.modalButtonText}>Help</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  moreModal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#800080',
  },
});

export default MoreOptionsScreen;
