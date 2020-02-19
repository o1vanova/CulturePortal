import * as React from 'react';
import { Card,  Container } from 'react-bootstrap';
import BlockArchitectDay from '../../components/blockArchitectDay/BlockArchitectDay';

const MainPage = () => {
  const architect = {
    id: 1,    
    imageSrc: './images/arch.jpg', 
    name: 'Юрий Васильевич Шпит', 
    description: 'Юрий Шпит родился 9 ноября 1930 года в Запорожье. Юрий Шпит родился 9 ноября 1930 года в Запорожье. Юрий Шпит родился 9 ноября 1930 года в Запорожье.'
  }

  return (
    <Container>
      <BlockArchitectDay architect={architect}/>
    </Container>
  );
};

export default MainPage;