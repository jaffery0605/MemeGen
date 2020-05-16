import * as React from 'react';
import { Text, View, StyleSheet, Image ,Button,Platform,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import {Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



function AuthScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.text_header}>Hello Memer!</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.text_footer}>Name</Text>
      <View style={styles.action}>
        <FontAwesome
          name="user-o"
          color="#05375a"
          size={25}
        />
        <TextInput
          placeholder="Your Name"
          style={styles.textInput}
        />
      </View>
      <Text style={[styles.text_footer,{marginTop: 30}]}>Phone no.</Text>
      <View style={styles.action}>
        <FontAwesome
          name="phone"
          color="#05375a"
          size={25}
        />
        <TextInput
          placeholder="Your Phone No."
          
          keyboardType="phone-pad"
          style={styles.textInput}
        />
        <Feather
          name="check-circle"
          color='green'
          size={2}
        />
      </View>
    </View>
  </View>
);
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});