import React, { Component } from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class PostScreen extends Component {
  render () {
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
              onPress={{}}
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
          />
        </View>
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
    padding: 5
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
