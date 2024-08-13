import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/AuthStack';
import Icon from 'react-native-vector-icons/Ionicons';

interface LoginScreenProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({setIsLoggedIn}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

   const handleLogin = async () => {
    
     setIsLoggedIn(true);
     navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Docsync</Text>
      <Text style={styles.subheading}>Login to your account</Text>

      <View style={styles.inputContainer}>
         <Text style={styles.label}>
          Email Address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDown} onPress={handleLogin}>
        <Text style={styles.buttonTextDown}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 170,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  label: {
    marginBottom:10,
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    marginBottom: 40,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 45,
  },
  button: {
    backgroundColor: '#4D4AD3',
    padding: 15,
    borderRadius: 5,
    marginTop: 60,
    alignItems: 'center',
  },
 
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  buttonDown: {
  backgroundColor: 'rgba(77, 74, 211, 0.1)', 
  padding: 15,
  borderRadius: 5,
  marginTop: 20,
  alignItems: 'center',
},
buttonTextDown: {
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
},


  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  linkText: {
    fontSize: 16,
    color: '#0000FF',
    fontFamily: 'SpaceGrotesk-Regular',
  },
});
export default LoginScreen;
