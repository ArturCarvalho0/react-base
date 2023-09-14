import React from 'react';

import { Container } from '../../styles/GlobalStyle';

import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>lorem</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
