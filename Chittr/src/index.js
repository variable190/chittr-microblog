import React, { Component } from 'react'
import { StyleSheet, Button, View, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'

import AppNavigator from './lib/router'
const AppIndex = createAppContainer(AppNavigator)

export default class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='red'
          barStyle='light-content'
        />
        <View style={styles.logoutView}>
          <Button
            onPress={() => this.props.onLogoutPress()}
            title='Logout'
            color='red'
            border='red'
          />
        </View>
        <AppIndex />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoutView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    borderColor: 'red'
  }
})
