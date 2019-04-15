import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import BiasComponent from './BiasComponent'

class BiasContainer extends Component {
  constructor(props) {
    super(props)
    this.sanitizeData = this.sanitizeData.bind(this)
  }


  sanitizeData(biasesData, newsBiasData) {
    let sanBiasesData
    let sanNewsBiasData

    sanBiasesData = Object.keys(biasesData).filter(key => key !== "ID").map(key => {
      return {subject: key, A: (biasesData[key]*10), B: (sanNewsBiasData[key]*10)}
    })
    return sanBiasesData
  }

  render() {
    const {biasesData, newsBiasData} = this.props

    let reWorkedData = this.sanitizeData(biasesData, newsBiasData)
    return (
       <React.Fragment>
         {!this.props.biasesLoading && <BiasComponent data={reWorkedData} />}
       </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  biasesData: state.biases.data,
  biasesLoading: state.biases.loading,
  newsBiasData: state.news.data
})

export default connect(mapStateToProps)(BiasContainer)

BiasContainer.propTypes = {
  biasesLoading: PropTypes.bool.isRequired,
  biasesData: PropTypes.object.isRequired,
  newsBiasData: PropTypes.object.isRequired
}