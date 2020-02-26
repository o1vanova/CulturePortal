import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BlockAuthorInfo from '../../components/author/blockAuthorInfo/BlockAuthorInfo';
import StoreContext from '../../app/store';

const AuthorPage = (): JSX.Element => {
  const { architectId } = useParams();
  const { architects } = useContext(StoreContext);

  const architect = architects.find(item => architectId == item.id.toString());

  return architect ? (
    <BlockAuthorInfo
      imgSrc={architect.imgSrc}
      authorName={architect.name}
      authorLive={architect.timeLife}
      authorDescr={architect.description}
    />
  ) : (
    <></>
  );
};

export default AuthorPage;
