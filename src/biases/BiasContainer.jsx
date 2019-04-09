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

  serializeData(newsData, newsBiasData) {
    let allData
    allData = Object.keys(newsData).map()
  }

  render() {
    const {newsData, newsBiasData} = this.props
    let reWorkedData = this.sanitizeData(newsData)
    let serializedData = this.serializeData(reWorkedData, newsBiasData)
    return (
       <React.Fragment>
         {!this.props.biasesLoading && <BiasComponent data={reWorkedData} />}
       </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  newsData: state.biases.data,
  biasesLoading: state.biases.loading,
  newsBiasLoading: state.newsBias.loading,
  newsBiasData: state.newsBias.data
})

export default connect(mapStateToProps)(BiasContainer)

BiasContainer.propTypes = {
  biasesLoading: PropTypes.bool.isRequired,
  newsData: PropTypes.object.isRequired,
  newsBiasLoading: PropTypes.object.isRequired,
  newsBiasData: PropTypes.object.isRequired
}