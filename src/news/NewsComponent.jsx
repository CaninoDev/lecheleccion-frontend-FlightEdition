import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea'

const styles = {
  card: {
    width: 345,
    height: 345
  },
  media: {
    height: 140,
  },
}

const NewsComponent = props => {
    const { article, classes } = props

    return (
       <Grid item>
         <Card className={classes.card}>
           <CardActionArea onClick={() => props.biasFunc(article.ID)}>
            <CardContent>
                <CardMedia className={classes.media} image={article.URLToImage}/>
                <Typography variant='caption' gutterBottom>{article.PublicationDate}</Typography>
                <Typography>{article.Title}</Typography>
            </CardContent>
           </CardActionArea>
        </Card>
       </Grid>
    )
}

NewsComponent.propTypes = {
    article:PropTypes.object,
    classes: PropTypes.object,
    biasFunc: PropTypes.func
}

export default withStyles(styles)(NewsComponent)