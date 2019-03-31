import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

const NewsComponent = props => {
    const { article, classes } = props

    return (
        <Card className={classes.card}>
            <CardContent>
                <CardMedia className={classes.media} image={article.URLToImage}/>
                <Typography variant='caption' gutterBottom>{article.PublicationDate}</Typography>
                <Typography>{article.Title}</Typography>
            </CardContent>
        </Card>
    )
}

NewsComponent.propTypes = {
    article:PropTypes.object
}

export default withStyles(styles)(NewsComponent)