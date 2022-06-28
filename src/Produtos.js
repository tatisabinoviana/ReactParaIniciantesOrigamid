import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.teste = 'teste';
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.titulo} : {this.teste}
        </h1>
      </div>
    );
  }
}

export default Produtos;
