import React, { Component } from 'react';

class NewsItem extends Component {
    render () {
        return(
        <div className="news card-deck">
          <div className="image-container">
            <img className="card-img-top" src={this.props.urlToImage} alt={this.props.urlToImage}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <h5 className="card-title">{this.props.author}</h5>
                <h5 className="card-title">{this.props.description}</h5>
                <h5 className="card-title">{this.props.url}</h5>
                <h5 className="card-title">{this.props.publishedAt}</h5>
                <br></br>
                <br></br>
            </div>
          </div>
         </div>
       );
      }
}

export default NewsItem;