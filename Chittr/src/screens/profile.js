import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProfileScreen extends Component {
  render () {
    return (
      <View>
        <Text>This is Search Screen</Text>
      </View>
    )
  }
}

ProfileScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-person'
      color={tintColor}
      size={25}
    />
  )
}
