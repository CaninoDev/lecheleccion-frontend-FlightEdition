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

    sanNewsBiasData = Object.keys(newsBiasData).filter(key => key !== "Articles")

    sanBiasesData = Object.keys(biasesData).filter(key => key !== "ID").map(key => {
      return {subject: key, A: (biasesData[key]*10), B: (sanNewsBiasData[key]*10)}
    })
    return sanBiasesData
  }

  render() {
    const {biasesData, newsBiasData, biasesLoading} = this.props

    let reWorkedData = this.sanitizeData(biasesData, newsBiasData)
    return (
       <React.Fragment>
         {!biasesLoading && <BiasComponent data={reWorkedData} />}
       </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  biasesData: state.bias.data,
  biasesLoading: state.bias.loading,
  newsBiasData: state.news.data
})

export default connect(mapStateToProps)(BiasContainer)

BiasContainer.propTypes = {
  biasesLoading: PropTypes.bool.isRequired,
  biasesData: PropTypes.object.isRequired,
  newsBiasData: PropTypes.object.isRequired
}