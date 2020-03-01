import React, { Component } from 'react'
import { Text, TextInput, Button, View, StyleSheet } from 'react-native'
import Container from '../components/container'
import { TouchableOpacity } from 'react-native-gesture-handler'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  render () {
    return (
      <View style={styles.view}>
        <View style={styles.view}>
          <Text style={styles.title}>CHITTR</Text>
        </View>
        <View style={styles.view}>
          <Container>
            <Text style={styles.heading}>Login</Text>
          </Container>
          <Container>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              keyboardType='email-address'
              returnKeyType='next'
              placeholder='Email'
              onSubmitEditing={(email) => this.setState({ email })}
            />
          </Container>
          <Container>
            <TextInput
              secureTextEntry
              style={styles.input}
              autoCapitalize='none'
              returnKeyType='go'
              placeholder='Password'
              onSubmitEditing={(password) => this.setState({ password })}
            />
          </Container>
          <Container>
            <Button
              onPress={() => this.props.onLoginPress()}
              title='Submit'
              color='black'
            />
          </Container>
          <TouchableOpacity>
            <Text>Create new account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 50,
    color: 'white',
    borderColor: 'white',
    borderWidth: 4,
    padding: 4,
    paddingLeft: 10
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1
  }
})

export default LoginScreen
