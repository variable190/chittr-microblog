import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'
import validator from '../lib/validator'

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      emailError: null,
      givenName: '',
      givenNameError: null,
      surname: '',
      surnameError: null,
      password: '',
      passwordError: null,
      confirmPassword: '',
      confirmPasswordError: null
    }
  }
  
  logIn = () => {
    let { email, givenName, surname, password, confirmPassword } = this.state;

    let emailError = validator('email', email)
    let givenNameError = validator('givenName', givenName)
    let surnameError = validator('surname', surname)
    let passwordError = validator('password', password)
    let confirmPasswordError = validator('confirmPassword', {confirmPassword: confirmPassword, password: password})
    this.setState({
      emailError: emailError,
      givenNameError: givenNameError,
      surnameError: surnameError,
      passwordError: passwordError,
      confirmPasswordError: confirmPasswordError
    })
  }

  render () {

    const {emailError, givenNameError, surnameError, passwordError, confirmPasswordError} = this.state
    
    return (
      <View style={styles.screenView}>
        <Text style={styles.title}>Enter your details:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='Email'
          onChangeText={(email) => this.setState({ email })}
        />
        <Text> {emailError ? emailError : null}</Text>
        <TextInput
          style={styles.input}
          returnKeyType='next'
          placeholder='First name'
          onChangeText={(givenName) => this.setState({ givenName })}
        />
        <Text> {givenNameError ? givenNameError : null}</Text>
        <TextInput
          style={styles.input}
          returnKeyType='next'
          placeholder='Surname'
          onChangeText={(surname) => this.setState({ surname })}
        />
        <Text> {surnameError ? surnameError : null}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize='none'
          placeholder='Password'
          returnKeyType='next'
          onChangeText={(password) => this.setState({ password })}
        />
        <Text> {passwordError ? passwordError : null}</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize='none'
          placeholder='Confim password'
          returnKeyType='go'
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
        />
        <Text> {confirmPasswordError ? confirmPasswordError : null}</Text>
        <Button
          style={styles.submit}
          onPress={this.logIn}
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
    marginTop: 10,
    fontSize: 20,
    paddingLeft: 10
  }
})

export default SignUpScreen
