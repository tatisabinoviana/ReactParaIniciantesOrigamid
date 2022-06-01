import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const App = () => {
  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Meu título</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
