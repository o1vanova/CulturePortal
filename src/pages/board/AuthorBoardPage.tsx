// import React, { Fragment } from 'react';
// import { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import AuthorCard from '../../components/authorCard/AuthorCard';
// import { Search } from '../../components/search/Search';
// import Author from '../../model/author';

// const AuthorBoardPage = (): JSX.Element => {

//   const arrAuthor = [
//     {
//       id: 1,
//       imgSrc: './images/arch.jpg',
//       title: 'Юрий',
//       description:
//         'Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
//     },
//     {
//       id: 2,
//       imgSrc: './images/arch.jpg',
//       title: 'Юрий Васильевич Шпит',
//       description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
//     },
//     {
//       id: 3,
//       imgSrc: './images/arch.jpg',
//       title: 'Юрий Васильевич Шпит',
//       description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
//     },
//     {
//       id: 4,
//       imgSrc: './images/arch.jpg',
//       title: 'Юрий Васильевич Шпит',
//       description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
//     },
//     {
//       id: 5,
//       imgSrc: './images/arch.jpg',
//       title: 'Брий Васильевич Шпит',
//       description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье.',
//     },
//     {
//       id: 6,
//       imgSrc: './images/arch.jpg',
//       title: 'Арий Васильевич Шпит',
//       description: 'tEST',
//     }
//   ];

//   const [searchAuthor, setSearchAuthor] = useState<Author[]>(arrAuthor);

//   const filterHandler = (search: string, titlePlaceHolder: string) => {
//     setSearchAuthor(arrAuthor.filter(author => {
//       if ( titlePlaceHolder === "Введите Имя")
//         return author.title.includes(search);
//       else if (titlePlaceHolder === "Введите Город") {
//         return author.description.includes(search);
//       }
//       else {
//         return author.imgSrc.includes(search);
//       }
//     }));
//   };

import React, { Fragment, useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorCard from '../../components/authorCard/AuthorCard';
import StoreContext from '../../app/store';
import { Search } from '../../components/search/Search';
import Author from '../../model/author';

const AuthorBoardPage = (): JSX.Element => {

  const { architects } = useContext(StoreContext);
  const [searchAuthor, setSearchAuthor] = useState<Author[]>(architects);

  const filterHandler = (search: string, titlePlaceHolder: string) => {
  setSearchAuthor(architects.filter(author => {
        if ( titlePlaceHolder === "Введите Имя")
          return author.name.includes(search);
        else if (titlePlaceHolder === "Введите Город") {
          return author.cityBirth.includes(search);
        }
        else {
          return author.timeLife.includes(search);
        }
    }));
  };

  return (
    <Fragment>
      <h2 className="text-center text-info">Укажите вид поиска</h2>
      <Container>
        <Row className="align-items-center justify-content-center search">
        <Search
        dataSearch={filterHandler}
        />
        </Row>
      </Container>
        <Container>
        <Row className="row-custom-align">
          {searchAuthor.map((x, i) => (
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
