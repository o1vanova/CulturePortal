import React from 'react';
import Card from 'react-bootstrap/Card';
import './AuthorCard.scss';
import Author from '../../model/author';
import { Link } from 'react-router-dom';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps): JSX.Element => {
  return (
    <Link to={'authors/' + author.id} className="Author-reference">
      <Card className="Authors-card mb-3">
        <Card.Img className="Authors-card__photo" src={author.imgSrc} />
        <Card.Body>
          <Card.Title>{author.title}</Card.Title>
          <Card.Text>{author.description}</Card.Text>
          <div className="Author-card__text-fade"></div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AuthorCard;
