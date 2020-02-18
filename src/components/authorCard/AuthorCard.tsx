import React, {Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import './AuthorCard.scss';

interface Author {
  imgSrc: string,
  title: string,
  description: string
}

const AuthorCard = (props:any) => {
  return (
    <a href={'authors/' + props.author.id} className="Author-reference">
      <Card className="Authors-card mb-3">
        <Card.Img className="Authors-card__photo" variant="top" src={props.author.imgSrc}/>
        <Card.Body>
          <Card.Title>{props.author.title}</Card.Title>
          <Card.Text>
            {props.author.description}
          </Card.Text>
          <div className="Author-card__text-fade"></div>
        </Card.Body>
      </Card>
    </a>
  );
};

export default AuthorCard;