import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    serialize = (obj) => {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    componentDidMount = () => {
        const json = sessionStorage.getItem("results");
        const filters = JSON.parse(json);
        const getUrl = `/products?${this.serialize(filters)}`;
        axios.get(getUrl)
            .then(response => {
                this.setState({
                    list: response.data
                })
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log(this.state.list)
            })
    };

    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            card: {
                maxWidth: 345,
            },
            media: {
                height: 100,
            },
        }));

        return (
            <div className={classes.root} id="quiz-results" justify="center">
                <h2>These are the best cups for you!</h2><br />
                <Grid container spacing={2}>
                    {this.state.list.map((product, index) => (
                        <Grid key={index} item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <a href={product.url} alt={product.brand} target="_blank" rel="noopener noreferrer">
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            alt={product.brand}
                                            image={product.image}
                                            title={product.brand} />
                                    </a>
                                </CardActionArea>
                                <CardActions>
                                    <a href={product.url} alt={product.brand} target="_blank" rel="noopener noreferrer">
                                        <Button size="small" color="primary">
                                            {product.brand}
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div >
        );
    }
}

export default Results;
