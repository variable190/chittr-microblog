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

class UserScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        given_name: '',
        family_name: '',
        email: '',
        recent_chits: [],
        user_id: 0
      },
      isFollowed: false,
      followed: []
    }
    this.handleFollow = this.handleFollow.bind(this)
  }

  componentDidMount () {
    this.isFollowing()
    this.getUserDetails()
  }

  getUserDetails () {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' +
      `${this.props.navigation.state.params.user_id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ user: json })
      },
      err => {
        console.log(err.name)
        Alert.alert('Fail loading')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  isFollowing () {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' +
      `${this.props.screenProps.id}/following`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ followed: json })
      },
      err => {
        console.log(err.name)
        Alert.alert('Fail loading')
      })
      .catch((error) => {
        console.error(error)
      })
      .then(() => {
        this.state.followed.map((user) => {
          if (user.user_id === this.props.navigation.state.params.user_id) {
            this.setState({ isFollowed: true })
          }
        })
      })
  }

  handleFollow () {
    if (this.state.isFollowed) {
      return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' +
        `${this.props.navigation.state.params.user_id}/follow`,
      {
        method: 'DELETE',
        headers: {
          'X-Authorization': `${this.props.screenProps.token}`
        }
      })
        .then(response => {
          if (response.status === 200) {
            this.setState({ isFollowed: false })
          } else {
            Alert.alert('User not unfollowed')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      return fetch('http://10.0.2.2:3333/api/v0.0.5/user/' +
        `${this.props.navigation.state.params.user_id}/follow`,
      {
        method: 'POST',
        headers: {
          'X-Authorization': `${this.props.screenProps.token}`
        }
      })
        .then(response => {
          if (response.status === 200) {
            this.setState({ isFollowed: true })
          } else {
            Alert.alert('User not followed')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  render () {
    const contents = this.state.user.recent_chits.map((chit, i) => {
      return (
        <Chit
          key={i}
          user={this.state.user.user_id}
          chit={chit.chit_content}
        />
      )
    })
    return (
      <ScrollView>
        <View style={styles.userContainer}>
          <View style={styles.userDetailsContainer}>
            <View style={styles.picContainer}>
              <View style={styles.pic} />
            </View>
            <View style={styles.personalDetailsContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.details}>
                  {this.state.user.given_name}
                </Text>
                <Text style={styles.details}>
                  {this.state.user.family_name}
                </Text>
                <Text style={styles.details}>
                  {this.state.user.email}
                </Text>
              </View>
              <View style={styles.followButtonContainer}>
                <Button
                  onPress={this.handleFollow}
                  title={this.state.isFollowed ? 'Unfollow' : 'Follow'}
                  color='black'
                />
              </View>
            </View>
          </View>
          <View style={styles.followContainer}>
            <TouchableOpacity
              style={styles.followButton}
              onPress={
                () => this.props.navigation.navigate('UserFollowersScreen',
                  { user_id: this.state.user.user_id })
              }
            >
              <Text style={styles.followText}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.followButton}
              onPress={
                () => this.props.navigation.navigate('UserFollowingScreen',
                  { user_id: this.state.user.user_id })
              }
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
    padding: 0,
    backgroundColor: 'red',
    margin: 2,
    color: 'black'
  },
  followButtonContainer: {
    flex: 1,
    padding: 5,
    paddingTop: 0
  }
})

export default UserScreen
