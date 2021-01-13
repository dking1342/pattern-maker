import React from 'react';
import Board from './components/Board';
import Form from './components/Form';
import Mosiac from './components/Mosiac';
import Pattern from './components/Pattern';

const App = () => {
  return (
    <main className="container">
      <Board />
      <Pattern />
      <Mosiac />
      <Form />
    </main>
  );
}

export default App;
