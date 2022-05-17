import React from 'react';

const App = () => {
  const [comentarios, useComentarios] = React.useState(['teste', 'teste2']);
  const [input, setInput] = React.useState('teste');

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
      </ul>
    </div>
  );
};

export default App;
