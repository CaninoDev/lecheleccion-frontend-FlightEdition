import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import openSocket from 'socket.io-client'

import NewsComponent from 'news'

export default class NewsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount () {
      this.setState({
          articlesChannel: this.createSocket()
      })

  }

  createSocket = () => {
      let socket = openSocket('http://localhost:3001/api/v1/cable')
      socket.emit('connect', {})
      socket.on('articles', (data) => this.setState({
          articles: data
      }))
    }
    
  render () {
    const { articles } = this.state
    return (
      <Grid item xs={9}>
      <h1>{articles.length}</h1>
        { (articles.length > 0) && <NewsComponent news={articles} /> }
      </Grid>
    )
  }
}
