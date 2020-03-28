import React from 'react';
// import React, { useState } from 'react';

import './global.css';

// JSX javascript XML

// import Header from './Header';
// import Logon from './pages/Logon';
import Routes from './routes';
function App() {
  // const [counter, setCounter] = useState(0);

  // function increment(){
  //   setCounter(counter + 1);
  // }

  return (
    // <Header title="Semana Omnistack" />
    // <div>
    //   <Header>Contador : {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    <Routes />
  );
}

export default App;
