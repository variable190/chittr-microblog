import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import Container from './container'
import { ScrollView } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width

class Chit extends Component {
  render () {
    return (
      <View style={styles.chit}>
        <View style={styles.picView}>
          <Container>
            <Text style={styles.name}>{this.props.user}</Text>
          </Container>
          <View style={styles.pic}>
            {this.props.pic}
          </View>
        </View>
        <View style={styles.textView}>
          <Container>
            <ScrollView>
              <Text style={styles.chitText}>{this.props.chit}</Text>
            </ScrollView>
          </Container>
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
