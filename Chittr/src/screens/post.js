import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class PostScreen extends Component {
  render () {
    return (
      <View>
        <Text>This is Post Screen</Text>
      </View>
    )
  }
}

PostScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-chatbubbles'
      color={tintColor}
      size={25}
    />
  )
}
