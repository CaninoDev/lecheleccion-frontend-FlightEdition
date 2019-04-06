import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'

import { BiasComponent } from './BiasComponent'

const styles = themes => ({
  chart: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '300px',
    height: '300px',
    background: '#73AD21'
  }
})

class BiasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.loading,
      data: this.props.data
    }
  }

  render() {
    const { classes } = this.props
    return (
       <div className={classes.chart}>
         {!this.props.loading && <BiasComponent data={this.props.data} />}
       </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.biases.data,
  loading: state.biases.loading
})

export default withStyles(styles)(connect(mapStateToProps)(BiasContainer))

BiasContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  bias: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}