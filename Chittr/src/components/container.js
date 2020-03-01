import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class Container extends Component {
  render () {
    return (
      <View style={styles.labelContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    margin: 10
  }
})

export default Container
