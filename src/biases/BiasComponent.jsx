import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {PropTypes} from 'prop-types'

const styles = themes => ({
  chartOverlay: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '300px',
    height: '300px',
    background: 'white'
  }
})

const BiasComponent = props => {
  const {classes} = props
  return (
     <div className={classes.chartOverlay}>
       Hello!
     </div>
  )
}

export default withStyles(styles)(BiasComponent)

BiasComponent.propTypes = {
  classes: PropTypes.object.isRequired
}