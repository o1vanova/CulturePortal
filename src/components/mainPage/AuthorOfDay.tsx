import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import StoreContext from '../../app/store';
import Author from '../../model/author';

const AuthorOfDay = (): JSX.Element => {
  const { t } = useTranslation();
  const { architects } = useContext(StoreContext);

  const dayOfWeek = (): number => {
    const day = new Date();
    return day.getDay() + 1;
  };

  const architect = architects.find((item: Author) => dayOfWeek() == item.id);

  return architect ? (
    <section className="architect-of-the-day">
      <h2>{t('headers.architectDay')}</h2>
      <a href="#">
        <h4>{t(architect.name)}</h4>
      </a>
      <a href="#">
        <img src={architect.imgSrc} alt="photo" className="architect-photo" />
      </a>
      <p>{t(architect.description)}</p>
    </section>
  ) : (
    <></>
  );
};

export default AuthorOfDay;
