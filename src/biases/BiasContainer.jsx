import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import BiasComponent from './BiasComponent'

class BiasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.loading,
      data: this.props.data
    }
  }

  render() {
    return (
       <React.Fragment>
         {!this.props.loading && <BiasComponent data={this.props.data} />}
       </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  data: state.biases.data,
  loading: state.biases.loading
})

export default connect(mapStateToProps)(BiasContainer)

BiasContainer.propTypes = {
  bias: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}