import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'


const styles = themes => ({
  chart: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '300px',
    border: '3px solid #73AD21'
  }
})

class BiasContainer extends Component {
  render() {
    const { classes } = this.props
    return (
       <div className={classes.chart}>
         Hello!
       </div>
    )
  }
}
export default withStyles(styles)(BiasContainer)

BiasContainer.propTypes = {
  classes: PropTypes.object.isRequired
}