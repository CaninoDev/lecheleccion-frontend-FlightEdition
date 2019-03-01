import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import NewsComponent from "news"

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.socket = new WebSocket("ws://localhost:3001/api/cable");
  }

  componentDidMount() {
    this.socket.onopen = () => {}
    this.socket.onerror = function(error) {
      console.log("WebSocket Error: " + error);
    }
    this.socket.onmessage = evt => this.setState({
      articles: JSON.parse(evt.data)
    })
  }
  
  com

  render() {
    const { articles } = this.state;
    return (
      <React.Fragment>
        <Button title="fetch" onClick={() => this.socket.send("")}>Fetch</Button>
        <Grid item xs={9}>
          {articles.length > 0 && <NewsComponent news={articles} />}
        </Grid>
      </React.Fragment>
    )
  }
}