import React, { Component } from 'react'
import { View, StyleSheet, Button, TextInput, Alert, Text } from 'react-native'
import validator from '../lib/validator'
import fetch from 'node-fetch'

class PostScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chit: '',
      chitError: null
    }
  }

  handleChit = () => {
    const { chit } = this.state
    const chitError = validator('chit', chit)
    this.setState({ chitError: chitError })

    if (!chitError) {
      this.postChit()
    }
  }

  postChit () {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/chits',
      {
        method: 'POST',
        body: JSON.stringify({
          timestamp: new Date().getTime(),
          chit_content: this.state.chit,
          location: {
            longitude: 0,
            latitude: 0
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `${this.props.screenProps.token}`
        }
      })
      .then((response) => {
        if (response.status === 201) {
          Alert.alert('You have chitt')
          this.setState({ chit: '' })
        } else {
          Alert.alert('Chitt failed')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const { chitError } = this.state

    return (
      <View style={styles.postContainer}>
        <View style={styles.submitContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={{}}
              title='Add image'
              color='black'
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.handleChit}
              title='Post'
              color='black'
            />
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline
            textAlignVertical='top'
            value={this.state.chit}
            onChangeText={(chit) => this.setState({ chit })}
          />
          <Text> {chitError || null}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0
  },
  submitContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    padding: 5,
    paddingTop: 0
  },
  textInputContainer: {
    flex: 1,
    padding: 5,
    marginTop: 10
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20
  }
})

export default PostScreen
