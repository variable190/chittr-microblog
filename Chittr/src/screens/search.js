import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert
} from 'react-native'
import User from '../components/users'
import fetch from 'node-fetch'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      users: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch () {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/search_user' +
      `?q=${this.state.query}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ users: json })
      },
      err => {
        console.log(err.name)
        Alert.alert('Fail loading')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const searchResults = this.state.users.map((user, i) => {
      const fullName = `${user.given_name} ${user.family_name}`
      return (
        <TouchableOpacity
          key={i}
          onPress={
            () => this.props.navigation.navigate('UserScreen',
              { user_id: user.user_id })
          }
        >
          <User name={fullName} email={user.email} id={user.user_id} />
        </TouchableOpacity>
      )
    })
    return (
      <View style={styles.searchScreen}>
        <View style={styles.searchBar}>
          <View style={styles.searchText}>
            <TextInput
              style={styles.searchField}
              autoCapitalize='none'
              returnKeyType='go'
              placeholder='Enter search term'
              placeholderTextColor='black'
              onChangeText={(query) => this.setState({ query })}
            />
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={this.handleSearch}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {searchResults}
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
  },
  searchField: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default SearchScreen
