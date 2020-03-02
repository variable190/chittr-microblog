import React, { Component } from 'react'
import { StyleSheet, Button, View, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './lib/router'

const AppIndex = createAppContainer(AppNavigator)

export default class App extends Component {
  render () {
    return (
      <View style={styles.appView}>
        <StatusBar
          backgroundColor='red'
          barStyle='light-content'
        />
        <View style={styles.logoutView}>
          <Button
            onPress={() => this.props.onLogoutPress()}
            title='Logout'
            color='black'
          />
        </View>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1
  },
  logoutView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  }
})
