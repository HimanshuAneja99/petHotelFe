import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
const styles = {
 
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 40,
  },
  image: {
    minWidth: 250,
    minHeight: 200,
    borderRadius: 400/ 2
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

export class DisplayHost extends Component {
     
    render() {
     
        dayjs.extend(relativeTime);
        const { classes , host : {name , price ,email , phone , body , createdAt , userHandle , imageUrl}} = this.props;  
        return (
            <Card className={classes.card}>
            <CardMedia
              image={imageUrl}
              title="profile image"
              className={classes.image}
            />
            <CardContent className={classes.content}>
              <Typography
                variant="h5"
                component={Link}
                to={`/host/${userHandle}`}
               
              >
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {dayjs(createdAt).fromNow()}
              </Typography>
              <Typography variant="body1">{body}</Typography>

              <Typography style={{paddingTop : 20 }} variant="button" display="block" gutterBottom>
              FROM INR {price}/night
              </Typography>
            
            </CardContent>
          </Card>
        )
    }
}

export default withStyles(styles)(DisplayHost);  
