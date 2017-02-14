import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signUp}>Sign Up</Text>
        <TextInput
        placeholder="email"
        style={styles.email}
        />
        <TextInput
        placeholder="password"
        style={styles.password}
        />
        <TouchableOpacity>
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  signUp: {
    flex: 1
  },
  email: {
    flex: 1,
    width: 250,
    backgroundColor: 'white'
  },
  password: {
    flex: 1
  }
})
