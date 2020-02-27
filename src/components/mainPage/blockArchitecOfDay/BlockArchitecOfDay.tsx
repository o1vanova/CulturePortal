import React, { Fragment } from 'react';
import { Col, Image, Card, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import Author from '../../../model/author';
import Routes from '../../../constants/routes';

import './BlockArchitecOfDay.scss';

interface BlockArchitecOfDayProps {
  architect: Author;
}

const BlockArchitecOfDay = ({ architect }: BlockArchitecOfDayProps ): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <Fragment>                  
      <Card className="bg-none mt-3 mb-3 border-0 rounded-0">                          
        <Row><Col className="text-center"><h4>{t('headers.architectDay')}</h4></Col></Row>
        <Row className="mt-2">
          <Col xl={4} lg={5} md={6} sm={12} xs={12} className="text-center">
            <LinkContainer to={`${Routes.ARCHITECTS}/${architect.id}`}>
              <Image className="Architect-image border-0 rounded-0" src={architect.imgSrc} fluid/>
            </LinkContainer>          
          </Col >
          <Col xl={8} lg={7} md={6} sm={12} xs={12}>
            <Card.Body>
              <Card.Title>{t(architect.name)}</Card.Title>
              <Card.Text>{t(architect.cityBirth)}</Card.Text>
              <Card.Text>{t(architect.description)}</Card.Text>          
            </Card.Body>
          </Col>
        </Row>        
      </Card>      
    </Fragment>
  );
};

export default BlockArchitecOfDay;