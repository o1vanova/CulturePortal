import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Colors } from '../../components/style/colors/Colors';
import { Buttons } from '../../components/style/buttons/Buttons';
import { CheckBoxs } from '../../components/style/checkBox/CheckBox';
import { Typography } from '../../components/style/typography/Typography';
import { Inputs } from '../../components/style/inputs/Inputs';
import { Tables } from '../../components/style/tables/Tables';
import Wrapper from '../../components/style/wrapper/Wrapper';
import Cards from '../../components/style/cards/Cards';
import codeExample from '../../constants/codeExample';

import './StyleGuide.scss';

const StylePage = (): JSX.Element => {
  return (
    <Container className="page-styleGuide">
      <h2 className="mt-3 text-center">Our styleGuide</h2>
      <Wrapper title="Color" codeExample={codeExample.Colors}>
        <Colors />
      </Wrapper>
      <Wrapper title="Typography" codeExample={codeExample.Typography}>
        <Typography />
      </Wrapper>
      <Wrapper title="Button" codeExample={codeExample.Buttons}>
        <Buttons />
      </Wrapper>
      <Wrapper title="Inputs" codeExample={codeExample.Inputs}>
        <Inputs />
      </Wrapper>
      <Wrapper title="CheckBox" codeExample={codeExample.CheckBox}>
        <CheckBoxs />
      </Wrapper>
      <Wrapper title="Table" codeExample={codeExample.Tables}>
        <Tables />
      </Wrapper>
      <Wrapper title="Cards" codeExample={codeExample.Cards}>
        <Cards />
      </Wrapper>
    </Container>
  );
};

export default StylePage;
