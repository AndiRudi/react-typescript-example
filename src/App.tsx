import React from 'react';
import { default as SignIn } from './components/SignIn'
import './App.css';
import Container from 'react-bootstrap/Container'

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <header className="App-header">
        <SignIn />
      </header>
    </Container>
  );
}

export default App;
