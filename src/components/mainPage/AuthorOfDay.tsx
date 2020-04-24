import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import StoreContext from '../../app/store';
import Author from '../../model/author';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { Container, Image } from 'react-bootstrap';

const AuthorOfDay = (): JSX.Element => {
  const { t } = useTranslation();
  const { architects } = useContext(StoreContext);

  const dayOfWeek = (): number => {
    const day = new Date();
    return day.getDay() + 1;
  };

  const architect = architects.find((item: Author) => dayOfWeek() == item.id);

  return architect ? (
    <Container className="architect-day">
      <h2>{t('headers.architectDay')}</h2>
      <Link to={`${routes.ARCHITECTS}/${architect.id}`}>
        <h4>{t(architect.name)}</h4>
      </Link>
      <Image src={architect.imgSrc} alt="photo" className="architect-photo" />
      <p>{t(architect.description)}</p>
    </Container>
  ) : (
    <></>
  );
};

export default AuthorOfDay;
