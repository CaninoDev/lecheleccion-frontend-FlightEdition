import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const NewsComponent = props => {
  return (
    <Card>
      <CardMedia
        image={props.articleData.urlToImage}
      >
      </CardMedia>
      <CardContent>
        <Typography variant='caption' gutterBottom>{props.articleData.publication_date}</Typography>
        <Typography>{props.articleData.title}</Typography>
      </CardContent>
    </Card>
  )
}

NewsComponent.propTypes = {
  articleData:PropTypes.object
}

export default NewsComponent

