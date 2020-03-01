import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width

class Chit extends Component {
  render () {
    return (
      <View style={styles.chit}>
        <View style={styles.picView}>
          <View style={styles.container}>
            <Text style={styles.name}>{this.props.user}</Text>
          </View>
          <View style={styles.pic}>
            {this.props.pic}
          </View>
        </View>
        <View style={styles.textView}>
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.chitText}>{this.props.chit}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chit: {
    flexDirection: 'row',
    width: WIDTH,
    height: WIDTH * 0.4,
    borderColor: 'black',
    borderWidth: 1
  },
  container: {
    margin: 10
  },
  picView: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'black'
  },
  textView: {
    flex: 2,
    padding: 5
  },
  name: {
    fontSize: 20,
    textAlign: 'center'
  },
  pic: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  chitText: {
    fontSize: 17
  }
})

export default Chit
