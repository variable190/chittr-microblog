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
    this.state = { isLoggedIn: false }
    this.state = { isNotSignedUp: false }
  }

  render () {
    if (this.state.isLoggedIn) {
      return (
        <App onLogoutPress={
          () => this.setState({ isLoggedIn: false })
        }
        />
      )
    } else {
      if (this.state.isNotSignedUp) {
        return (
          <SignUpScreen
            onSignUpPress={
              () => this.setState({ isLoggedIn: true, isNotSignedUp: false })
            }
          />
        )
      } else {
        return (
          <LoginScreen
            onSignUpPress={
              () => this.setState({ isNotSignedUp: true })
            }
            onLoginPress={
              () => this.setState({ isLoggedIn: true })
            }
          />
        )
      }
    }
  }
}

AppRegistry.registerComponent(appName, () => Chittr)
