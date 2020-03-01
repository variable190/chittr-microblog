/**
 * @format
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import LoginScreen from './src/screens/login'
import App from './src'  
import { name as appName } from './app.json'

class Chittr extends Component {
  constructor (props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  render () {
    if (this.state.isLoggedIn) {
      return <App onLogoutPress={() => this.setState({ isLoggedIn: false })} />
    } else {
      return <LoginScreen onLoginPress={() => this.setState({ isLoggedIn: true })} />
    }
  }
}

AppRegistry.registerComponent(appName, () => Chittr)
