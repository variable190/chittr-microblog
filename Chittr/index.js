/**
 * @format
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import LoginScreen from './src/screens/login'
import App from './src'
import { name as appName } from './app.json'
import SignUpScreen from './src/screens/signup'

class Chittr extends Component {
  constructor (props) {
    super(props)
    this.setId = this.setId.bind(this)
    this.setToken = this.setToken.bind(this)
    this.state = {
      isLoggedIn: false,
      isNotSignedUp: false,
      id: '',
      token: '',
      api: 'http://192.168.0.4:3333/api/v0.0.5'
    }
  }

  setId (newId) {
    this.setState({ id: newId })
  }

  setToken (newToken) {
    this.setState({ token: newToken })
  }

  render () {
    if (this.state.isLoggedIn) {
      return (
        <App
          id={this.state.id}
          token={this.state.token}
          api={this.state.api}
          onLogoutPress={
            () => this.setState({ isLoggedIn: false })
          }
        />
      )
    } else {
      if (this.state.isNotSignedUp) {
        return (
          <SignUpScreen
            api={this.state.api}
            onSignUpPress={
              () => this.setState({ isNotSignedUp: false })
            }
          />
        )
      } else {
        return (
          <LoginScreen
            api={this.state.api}
            onSignUpPress={
              () => this.setState({ isNotSignedUp: true })
            }
            onLoginPress={
              () => this.setState({ isLoggedIn: true })
            }
            setId={this.setId}
            setToken={this.setToken}
          />
        )
      }
    }
  }
}

AppRegistry.registerComponent(appName, () => Chittr)
