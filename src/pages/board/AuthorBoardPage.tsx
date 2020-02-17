import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthorCard from '../../components/authorCard/AuthorCard';

const AuthorBoardPage = () => {
  const array = [
    {id: 1, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
    {id: 2, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
    {id: 3, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
    {id: 4, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
    {id: 5, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
    {id: 6, imgSrc: './images/arch.jpg', title: 'Юрий Васильевич Шпит', description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.'},
  ];
  return (
    <Fragment>
      <div>Search</div>
      <Container>
        <Row className="row-custom-align">
          {array.map((x, i) => <Col className="col-without-padding" key = {i}><AuthorCard author = {x}></AuthorCard></Col>)}
        </Row>
      </Container>
    </Fragment>
  );
};

export default AuthorBoardPage;