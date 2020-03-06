import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Chit from '../components/chit'
import fetch from 'node-fetch'

export default class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: '0',
      count: '10',
      chitts: []
    }
  }

  componentDidMount () {
    this.getChits()
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
        this.setState({ json })
      },
      err => {
        console.log(err.name)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return this.renderJson()
  }

  renderJson () {
    const contents = this.state.chitts.map((chit) => {
      // eslint-disable-next-line no-unused-expressions
      <Chit user={chit.user.given_name} chit={chit.chit_content} />
    })
    return (
      <ScrollView>
        {contents}
      </ScrollView>
    )
  }
}
