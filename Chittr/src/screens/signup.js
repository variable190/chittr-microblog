import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      givenName: '',
      surname: '',
      password: '',
      confirmPassword: ''
    }
  }

  render () {
    return (
      <View style={styles.screenView}>
        <Text style={styles.title}>Enter your details:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='Email'
          onSubmitEditing={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          returnKeyType='next'
          placeholder='First name'
          onSubmitEditing={(givenName) => this.setState({ givenName })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='Email'
          onSubmitEditing={(surname) => this.setState({ surname })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize='none'
          placeholder='Password'
          returnKeyType='go'
          onSubmitEditing={(password) => this.setState({ password })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize='none'
          placeholder='Confim password'
          returnKeyType='go'
          onSubmitEditing={(confirmPassword) => this.setState({ confirmPassword })}
        />
        <Button
          onPress={() => this.props.onSignUpPress()}
          title='Sign up'
          color='black'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10
  }
})

export default SignUpScreen
