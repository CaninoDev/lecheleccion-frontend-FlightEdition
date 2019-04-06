import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {PropTypes} from 'prop-types'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

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
  const {classes, data} = props
  return (
     <div className={classes.chartOverlay}>
       <ResponsiveContainer height="100%" width="100%">
         <RadarChart outerRadius={15} data={data}>
           <PolarGrid/>
           <PolarAngleAxis dataKey="subject"/>
           <PolarRadiusAxis angle={30} domain={[0, 15]}/>
           <Radar
              name="Biases"
              dataKey="A"
              fillOpacity={0.7}
           />
         </RadarChart>
       </ResponsiveContainer>
     </div>
  )
}

export default withStyles(styles)(BiasComponent)

BiasComponent.propTypes = {
  classes: PropTypes.object.isRequired
}