import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewsComponent } from 'news'
import { fetchNews } from 'actions'

class NewsContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    const { articles } = this.props

    return (
        <React.Fragment>
          { (!this.props.loading) && articles.map(article => <NewsComponent article={article} key={article.ID} />) }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.news.loading,
  articles: state.news.data
})

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)

NewsContainer.propTypes = {
  articles: PropTypes.oneOfType([
     PropTypes.array,
     PropTypes.object
     ]),
  loading: PropTypes.bool,
  fetchNews: PropTypes.func
}
