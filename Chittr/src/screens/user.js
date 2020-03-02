import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Button,
  TextInput
} from 'react-native'
import Chit from '../components/chit'

const WIDTH = Dimensions.get('window').width

class UserScreen extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.userContainer}>
          <View style={styles.userDetailsContainer}>
            <View style={styles.picContainer}>
              <View style={styles.pic} />
            </View>
            <View style={styles.personalDetailsContainer}>
              <View style={styles.detailsContainer}>
                <TextInput
                  style={styles.details}
                  placeholder='name'
                  editable={false}
                />
                <TextInput
                  style={styles.details}
                  placeholder='email'
                  editable={false}
                />
                <TextInput
                  style={styles.details}
                  placeholder='ID'
                  editable={false}
                />
              </View>
              <View style={styles.followButtonContainer}>
                <Button
                  onPress={{}}
                  title='Follow'
                  color='black'
                />
              </View>
            </View>
          </View>
          <View style={styles.followContainer}>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => this.props.navigation.navigate('UserFollowersScreen')}
            >
              <Text style={styles.followText}>Followers: </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => this.props.navigation.navigate('UserFollowingScreen')}
            >
              <Text style={styles.followText}>Following: </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Chit user='user 1' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 2' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 3' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
        <Chit user='user 4' chit='if i keep typing for a very very long time then this chit will definitely be over 141 characters. That sentence was 97 in total but I am hopi' />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  userContainer: {
    height: WIDTH * 0.5,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0
  },
  userDetailsContainer: {
    flex: 4,
    flexDirection: 'row'
  },
  followContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  followButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  followText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  picContainer: {
    width: WIDTH * 0.4,
    padding: 5
  },
  pic: {
    height: WIDTH * 0.4 - 12,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  personalDetailsContainer: {
    flex: 1
  },
  detailsContainer: {
    flex: 3,
    padding: 5
  },
  details: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 0
  },
  followButtonContainer: {
    flex: 1,
    padding: 5,
    paddingTop: 0
  }
})

export default UserScreen
