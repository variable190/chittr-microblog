import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Chit from '../components/chit'

export default class HomeScreen extends Component {
  render () {
    return (
      <ScrollView>
        <Chit user='user 1' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 2' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 3' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 4' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name='md-home'
      color={tintColor}
      size={25}
    />
  )
}
