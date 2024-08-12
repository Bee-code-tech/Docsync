import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './apiClient';

export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

const USER_DATA_KEY = '@user_data';
const USER_TOKEN_KEY = '@user_token';

// Function to store user data and token in AsyncStorage
const storeUserData = async (userData: User) => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem(USER_DATA_KEY, jsonValue);
    await AsyncStorage.setItem(USER_TOKEN_KEY, userData.token);
  } catch (error) {
    console.error('Failed to save user data', error);
  }
};

// Function to get user data from AsyncStorage
const getUserData = async (): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Failed to fetch user data', error);
    return null;
  }
};

// Function to remove user data and token from AsyncStorage
const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_DATA_KEY);
    await AsyncStorage.removeItem(USER_TOKEN_KEY);
  } catch (error) {
    console.error('Failed to remove user data', error);
  }
};

// Function to log in
const login = async (email: string, password: string): Promise<User | null> => {
  try {
    const response = await apiClient.post('/login', { email, password });
    const userData: User = {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
      token: response.data.token,
    };
    await storeUserData(userData);
    return userData;
  } catch (error) {
    console.error('Login failed', error);
    return null;
  }
};

// Function to sign up
const signUp = async (name: string, email: string, password: string): Promise<User | null> => {
  try {
    const response = await apiClient.post('/signup', { name, email, password });
    const userData: User = {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
      token: response.data.token,
    };
    await storeUserData(userData);
    return userData;
  } catch (error) {
    console.error('Signup failed', error);
    return null;
  }
};

// Exporting all functions for use in other parts of the app
export {
  storeUserData,
  getUserData,
  removeUserData,
  login,
  signUp,
};
