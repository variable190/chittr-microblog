import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'
import User from '../components/users'

class UserFollowersScreen extends Component {
  render () {
    return (
      <View style={styles.followers}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Followers</Text>
        </View>
        <ScrollView>
          <User name='user 1' email='user1@usermail.com' id='123456' />
          <User name='user 2' email='user2@usermail.com' id='223456' />
          <User name='user 3' email='user3@usermail.com' id='323456' />
          <User name='user 4' email='user4@usermail.com' id='423456' />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  followers: {
    flex: 1
  },
  titleBar: {
    padding: 5,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default UserFollowersScreen
