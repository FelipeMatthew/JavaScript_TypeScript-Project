import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { ErrorTxt } from './styled';

export default function Page404() {
  return (
    <Container>
      <ErrorTxt>
        Page not found
        <br /> <span>Error 404</span>
      </ErrorTxt>
    </Container>
  );
}
