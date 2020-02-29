import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchScreen extends Component {
  render () {
    return (
      <View>
        <Text>This is Search Screen</Text>
      </View>
    )
  }
}

SearchScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-search'
      color={tintColor}
      size={25}
    />
  )
}
