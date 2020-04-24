import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MemberCard from '../../components/memberCard/MemberCard';
import StoreContext from '../../app/store';
import { useTranslation } from 'react-i18next';

const TeamPage = (): JSX.Element => {
  const { members } = useContext(StoreContext);
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-3 text-center">{t('headers.aboutTeam')}</h2>
        </Col>
      </Row>
      <Row>
        {members.map((m, i) => (
          <Col
            key={i}
            xl={{ span: 4, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
          >
            <MemberCard key={i} member={m} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamPage;
