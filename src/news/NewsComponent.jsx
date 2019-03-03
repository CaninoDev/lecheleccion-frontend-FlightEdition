import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const NewsComponent = props => {
    return (
        <Card key={props.article.ID}>
            <CardContent>
                <CardMedia image={props.article.URLToImage}/>
                <Typography variant='caption' gutterBottom>{props.article.PublicationDate}</Typography>
                <Typography>{props.article.Title}</Typography>
            </CardContent>
        </Card>
    )
}

NewsComponent.propTypes = {
    article:PropTypes.object
}

export default NewsComponent