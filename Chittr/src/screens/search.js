import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native'
import User from '../components/users'

class SearchScreen extends Component {
  render () {
    return (
      <View style={styles.searchScreen}>
        <View style={styles.searchBar}>
          <View style={styles.searchText}>
            <TextInput
              style={styles.searchField}
              autoCapitalize='none'
              returnKeyType='go'
              placeholder='Enter search term'
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
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
  searchScreen: {
    flex: 1
  },
  searchBar: {
    padding: 5,
    backgroundColor: 'red',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0
  },
  searchText: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    flex: 5,
    marginRight: 5
  },
  searchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  searchButtonText: {
    color: 'white'
  }
})

export default SearchScreen
