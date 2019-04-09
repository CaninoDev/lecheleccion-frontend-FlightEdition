import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { NewsComponent } from 'news'
import { fetchNews, fetchBias } from 'actions'

class NewsContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    const { articles } = this.props

    return (
        <React.Fragment>
          <Grid container spacing={16}>
          { (!this.props.loading) && articles.map(article => <NewsComponent biasFunc={this.props.fetchBias} article={article} key={article.ID} />) }
          </Grid>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.news.loading,
  articles: state.news.data
})

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
  fetchBias: (articleID) => dispatch(fetchBias(articleID)),

})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)

NewsContainer.propTypes = {
  articles: PropTypes.oneOfType([
     PropTypes.array,
     PropTypes.object
     ]),
  loading: PropTypes.bool,
  fetchNews: PropTypes.func,
  fetchBias: PropTypes.func,
}
