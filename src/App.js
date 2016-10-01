import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB0OplvQLfP6kzVAqDup7nFUniZepMBDuY',
      authDomain: 'auth-2ad14.firebaseapp.com',
      databaseURL: 'https://auth-2ad14.firebaseio.com',
      storageBucket: 'auth-2ad14.appspot.com',
      messagingSenderId: '416018619669'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
