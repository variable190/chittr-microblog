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
    this.state = {
      isLoggedIn: false,
      isNotSignedUp: false,
      id: ''
    }
  }

  setId (newId) {
    this.setState({ id: newId })
  }

  render () {
    if (this.state.isLoggedIn) {
      return (
        <App
          id={this.state.id}
          onLogoutPress={
            () => this.setState({ isLoggedIn: false })
          }
        />
      )
    } else {
      if (this.state.isNotSignedUp) {
        return (
          <SignUpScreen
            onSignUpPress={
              () => this.setState({ isNotSignedUp: false })
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
            setId={this.setId}
          />
        )
      }
    }
  }
}

AppRegistry.registerComponent(appName, () => Chittr)
