import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import BiasComponent from './BiasComponent'

class BiasContainer extends Component {
  constructor(props) {
    super(props)
    this.sanitizeData = this.sanitizeData.bind(this)
  }

  sanitizeData(data) {
    let newData
    newData = Object.keys(data).filter(key => key !== "ID").map(key => {
      return {subject: key, A: (data[key]*10)}
    })
    return newData
  }

  render() {
    const {data} = this.props
    let reWorkedData = this.sanitizeData(data)
    return (
       <React.Fragment>
         {!this.props.loading && <BiasComponent data={reWorkedData} />}
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