import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutTheProject = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <h2 className="display-5">{t('headers.aboutPortal')}</h2>
      <p className="lead">{t('content.portalDescription')}</p>
    </section>
  );
};

export default AboutTheProject;
