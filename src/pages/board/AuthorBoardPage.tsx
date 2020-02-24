import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import AuthorCard from '../../components/authorCard/AuthorCard';
import Search from '../../components/search/Search';


const AuthorBoardPage = (): JSX.Element => {

  const [ arrAuthor, setArrAuthor] = useState([
    {
      id: 1,
      imgSrc: './images/arch.jpg',
      title: 'Юрий',
      description:
        'Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
    {
      id: 2,
      imgSrc: './images/arch.jpg',
      title: 'Юрий Васильевич Шпит',
      description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
    {
      id: 3,
      imgSrc: './images/arch.jpg',
      title: 'Юрий Васильевич Шпит',
      description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
    {
      id: 4,
      imgSrc: './images/arch.jpg',
      title: 'Юрий Васильевич Шпит',
      description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
    {
      id: 5,
      imgSrc: './images/arch.jpg',
      title: 'Брий Васильевич Шпит',
      description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
    {
      id: 6,
      imgSrc: './images/arch.jpg',
      title: 'Арий Васильевич Шпит',
      description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
    },
  ]);

  const callback = (search:string) => {
    setArrAuthor(arrAuthor.filter(Author => {
      return Author.id == search;
    }))
  }
  console.log(arrAuthor);
  return (
    <Fragment>
      <Search sr={callback}/>
        <Container>
          <Row className="row-custom-align">
            {arrAuthor.map((x, i) => (
              <Col className="col-without-padding" key={i}>
                <AuthorCard author={x}></AuthorCard>
              </Col>
            ))}
          </Row>
        </Container>
    </Fragment>
  );
};

export default AuthorBoardPage;
