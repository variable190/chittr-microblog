import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

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
