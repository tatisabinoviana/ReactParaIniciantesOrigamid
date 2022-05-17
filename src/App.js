import React from 'react';

const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    video.current = 'Teste';
    console.log(video.current);
  });

  return <video ref={video} />;
};

export default App;
