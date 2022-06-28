import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo} :</h1>
        <p>{this.state.contar}</p>
        <button
          onClick={() =>
            this.setState(state => ({ contar: this.state.contar + 1 }))
          }
        >
          Adicionar
        </button>
      </div>
    );
  }
}

export default Produtos;
