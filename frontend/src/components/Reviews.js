import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    minWidth: "25vw",
  }

});

let cards = [];
for (let i = 0; i < 24; i++)
{
  cards.push(
    <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
​
              <TextareaAutosize
                rowsMax={6}
                aria-label="maximum height"
                placeholder="Write your review here"
                defaultValue=""
              />
​
            </CardContent>
          <CardActions>
            <i class="material-icons">
              thumb_up_alt
            </i>
            <Button size="small">Submit</Button>
            <TextareaAutosize
              rowsMax={4}
              aria-label="maximum height"
              placeholder="For site developers only..."
              defaultValue=""
            />
          </CardActions>
        </Card>
    </Grid>
  );
}

class Reviews extends Component {

    render() {
        return (
            <div>
                Reviews here!
                <br></br>
                <br></br>
                <Grid container spacing={3}>
                    {cards}
                </Grid>
            </div>
        );
    }
}

export default Reviews;
