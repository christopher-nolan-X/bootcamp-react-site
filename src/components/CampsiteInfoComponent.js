import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class CampsiteInfo extends Component {
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map(comment => (
            <div key={comment.id}>{comment.text}
              <p>{comment.author} - {new Intl.DateTimeFormat('en-US', 
                                    { year: 'numeric',
                                      month: 'short',
                                      day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}</p>
            </div>))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    if (this.props.campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default CampsiteInfo;