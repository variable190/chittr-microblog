import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Button,
  Alert
} from 'react-native'
import Chit from '../components/chit'
import fetch from 'node-fetch'

const WIDTH = Dimensions.get('window').width

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        given_name: '',
        family_name: '',
        email: '',
        recent_chits: [],
        user_id: 0
      }
    }
  }

  componentDidMount () {
    this.getProfileDetails()
  }

  componentDidUpdate (newProps) {
    if (newProps.screenProps.index === 3) {
      this.getProfileDetails()
    }
  }

  getProfileDetails () {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/user/' +
      `${this.props.screenProps.id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ profile: json })
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
    const contents = this.state.profile.recent_chits.map((chit, i) => {
      return (
        <Chit
          key={i}
          user={this.state.profile.user_id}
          chit={chit.chit_content}
        />
      )
    })
    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.profileDetailsContainer}>
            <View style={styles.picContainer}>
              <View style={styles.pic} />
            </View>
            <View style={styles.personalDetailsContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>
                  {this.state.profile.given_name}
                </Text>
                <Text style={styles.details}>
                  {this.state.profile.family_name}
                </Text>
                <Text style={styles.details}>
                  {this.state.profile.email}
                </Text>
              </View>
              <View style={styles.editButtonContainer}>
                <Button
                  onPress={
                    () => this.props.navigation.navigate('EditProfileScreen',
                      {
                        given_name: this.state.profile.given_name,
                        family_name: this.state.profile.family_name,
                        email: this.state.profile.email
                      })
                  }
                  title='Edit profile'
                  color='black'
                />
              </View>
            </View>
          </View>
          <View style={styles.followContainer}>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => this.props.navigation.navigate('FollowersScreen')}
            >
              <Text style={styles.followText}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => this.props.navigation.navigate('FollowingScreen')}
            >
              <Text style={styles.followText}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
        {contents}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    height: WIDTH * 0.5,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0
  },
  profileDetailsContainer: {
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
    fontWeight: 'bold',
    textDecorationLine: 'underline'
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
    padding: 0,
    backgroundColor: 'red',
    margin: 2,
    color: 'black'
  },
  editButtonContainer: {
    flex: 1,
    padding: 5,
    paddingTop: 0
  }
})

export default ProfileScreen
