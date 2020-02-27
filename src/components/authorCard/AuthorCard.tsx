import React from 'react';
import Card from 'react-bootstrap/Card';
import Author from '../../model/author';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../../constants/routes';

import './AuthorCard.scss';

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Link to={`${routes.ARCHITECTS}/${author.id}`} className="Author-reference">
      <Card className="Authors-card mb-3">
        <Card.Img variant="top" className="Authors-card__photo" src={author.imgSrc} />
        <Card.Body>
          <Card.Title>{t(author.name)}</Card.Title>
          <Card.Text>{t(author.description)}</Card.Text>
          <div className="Author-card__text-fade"></div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AuthorCard;
