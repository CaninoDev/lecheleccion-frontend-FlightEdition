import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NewsComponent } from 'news'

class NewsContainer extends Component {

  render() {
    return (
        <React.Fragment>
          { (!this.props.loading) && <NewsComponent article={this.props.article} /> }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.news.loading,
  article: state.news.data
})

NewsContainer.propTypes = {
  article: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, null)(NewsContainer)

