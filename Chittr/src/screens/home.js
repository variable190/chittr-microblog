import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Chit from '../components/chit'
import fetch from 'node-fetch'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: '0',
      count: '100',
      chits: []
    }
  }

  componentDidMount () {
    this.getChits()
  }

  componentDidUpdate (newProps) {
    if (newProps.screenProps.index === 0) {
      this.getChits()
    }
  }

  getChits () {
    return fetch('http://192.168.0.4:3333/api/v0.0.5/chits?' +
      `start=${this.state.start}&count=${this.state.count}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': `${this.props.screenProps.token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ chits: json })
      },
      err => {
        console.log(err.name)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const contents = this.state.chits.map((chit, i) => {
      return (
        <Chit
          key={i}
          user={chit.user.user_id}
          chit={chit.chit_content}
          chit_id={chit.chit_id}
        />
      )
    })
    return (
      <ScrollView>
        {contents}
      </ScrollView>
    )
  }
}

export default HomeScreen
