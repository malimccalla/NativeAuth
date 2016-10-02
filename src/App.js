import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB0OplvQLfP6kzVAqDup7nFUniZepMBDuY',
      authDomain: 'auth-2ad14.firebaseapp.com',
      databaseURL: 'https://auth-2ad14.firebaseio.com',
      storageBucket: 'auth-2ad14.appspot.com',
      messagingSenderId: '416018619669'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (

          <Button style={{ flex: 0 }}onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        <View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

export default App;
