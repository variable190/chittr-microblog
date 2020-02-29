import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'

export default class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  render () {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <Text style={{ fontSize: 50 }}>CHITTR</Text>
        </View>
        <View style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <Text style={{ fontSize: 30, marginBottom: 20 }}>Login</Text>
          <TextInput
            style={{ height: 40, marginBottom: 10 }}
            autoCapitalize='none'
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='Email'
            onSubmitEditing={(email) => this.setState({ email })}
          />
          <TextInput
            style={{ height: 40, marginBottom: 10 }}
            autoCapitalize='none'
            returnKeyType='go'
            placeholder='Password'
            onSubmitEditing={(password) => this.setState({ password })}
          />
          <Button
            onPress={() => this.props.onLoginPress()}
            title='Submit'
            color='red'
          />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        />
      </View>
    )
  }
}
