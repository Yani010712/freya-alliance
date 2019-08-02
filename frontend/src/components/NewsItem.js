import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './News.css';




class NewsItem extends Component {
  

    render() {
      const classes = makeStyles({
        card: {
          maxWidth: 345,
        },
        
      });
  
      return (
        <div className="container">
          <Card className={classes.card}>
            <a href={this.props.url}  target="blank" color = "black">
              <CardMedia
                component="img"
                alt={this.props.urlToImage}
                height="400"
                image={this.props.urlToImage}
                title={this.props.title}
                author={this.props.author}
                 />
                <Typography className="title-news" gutterBottom subtitle2="h5" component="h5">
                {this.props.title}
                </Typography>
              
            </a>
            <CardContent>
            <Typography>
                {this.props.author}
              </Typography>
              
              <Typography gutterBottom subtitle2="h5" component="h5">
              {this.props.description}
              </Typography>
                 
            </CardContent>
          </Card>
        </div>
      );
    }
  }


export default NewsItem;




// class NewsItem extends Component {
//     render () {
//         return(
//         <div className="news card">
//           <div className="image-container">
//             <img className="card-img-top" src={this.props.urlToImage} alt={this.props.urlToImage}/>
//             <div className="card-body">
//                 <h5 className="card-title"><a href={this.props.url}>{this.props.title}</a></h5>
//                 <div className="card-title">{this.props.author}</div>
//                 <p className="card-title">{this.props.description}</p>
//                 <div className="card-title">{this.props.publishedAt}</div>
//                 <br></br>
//             </div>
//           </div>
//          </div>
//        );
//       }
// }

// export default NewsItem;