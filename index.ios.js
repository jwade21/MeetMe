/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import SignIn from './components/SignIn.js';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA3C8EdRvdMvku6pOtJx_5Edr5gfKISfOY",
  authDomain: "meetme-752d7.firebaseapp.com",
  databaseURL: "https://meetme-752d7.firebaseio.com",
  storageBucket: "meetme-752d7.appspot.com",
  messagingSenderId: "521492210841"
};
const firebaseApp = firebase.initializeApp(config);

export default class meetme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>MeetMe</Text>
          <Text>Find your friends. Easy as that.</Text>
        </View>
        <View style={styles.signIn}>
          <SignIn  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1
  },
  signIn: {
    flex: 1
  }

});

AppRegistry.registerComponent('meetme', () => meetme);
