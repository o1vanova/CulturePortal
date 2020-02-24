import * as React from 'react';
import { useParams } from 'react-router-dom';
import BlockAuthorInfo from '../../components/author/blockAuthorInfo/BlockAuthorInfo';

const AuthorPage = (): JSX.Element => {
  const { architectId } = useParams();
  const authors = [
    {
      id: '1',
      authorName: 'Анемподистов Михаил Владимирович',
      authorLive: '16 марта 1964 г. - 23 января 2018 г.',
      authorDescr: 'Белорусский художник, дизайнер, поэт, культуролог, искусствовед.',
      imgSrc: '../images/author1/photo1.jpg',
    },
    {
      id: '2',
      authorName: 'Иванов Иван Иванович',
      authorLive: '11 марта 1904 г. - 13 января 2010 г.',
      authorDescr: 'Белорусский архитектор, культуролог, искусствовед.',
      imgSrc: '../images/author2/photo2.jpg',
    },
  ];
  const indAuthor = authors.findIndex(item => architectId == item.id);

  return (
    <>
      <BlockAuthorInfo
        imgSrc={authors[indAuthor].imgSrc}
        authorName={authors[indAuthor].authorName}
        authorLive={authors[indAuthor].authorLive}
        authorDescr={authors[indAuthor].authorDescr}
      />
    </>
  );
};

export default AuthorPage;
