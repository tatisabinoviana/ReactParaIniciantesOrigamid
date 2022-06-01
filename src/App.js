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

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const App = () => {
  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="#53d956">R$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
