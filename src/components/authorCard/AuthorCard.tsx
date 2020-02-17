import React from 'react';
import Card from 'react-bootstrap/Card';
import './AuthorCard.scss';
import routes from '../../constants/routes';

const AuthorCard = () => {
  return (
    <a href="#" className="Author-reference">
      <Card className="Authors-card">
        <Card.Img  variant="top" src="./images/arch.jpg"/>
        <Card.Body>
          <Card.Title>Юрий Васильевич Шпит</Card.Title>
          <Card.Text>
            Юрий Шпит родился 9 ноября 1930 года в Запорожье.
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default AuthorCard;