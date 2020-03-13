import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Text
} from 'react-native'
import validator from '../lib/validator'
import fetch from 'node-fetch'
import ImagePicker from 'react-native-image-picker'

class PostScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chit: '',
      chitError: null,
      addImage: false,
      photo: null,
      chit_id: 0
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

  handleAddImage = () => {
    const options = {
      mediaType: 'photo'
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response, addImage: true })
      }
    })
  }

  postPhoto () {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/user/' +
      `${this.props.screenProps.id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        fetch('http://192.168.0.4:3333/api/v0.0.5/chits/' +
         `${json.recent_chits[0].chit_id}/photo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'image/jpeg',
            'X-Authorization': `${this.props.screenProps.token}`
          },
          body: this.state.photo
        })
          .then(response => {
            if (response.status === 201) {
              Alert.alert('Photo added')
              this.setState({ photo: null, addImage: false })
            } else {
              Alert.alert('Photo not added')
              this.setState({ photo: null, addImage: false })
            }
          })
          .catch(error => {
            console.error(error)
          })
      },
      err => {
        console.log(err.name)
        Alert.alert('Fail loading')
      })
      .catch((error) => {
        console.error(error)
      })
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
          if (this.state.addImage === true) {
            this.postPhoto()
          }
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
              onPress={this.handleAddImage}
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
