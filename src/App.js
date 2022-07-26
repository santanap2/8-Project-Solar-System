import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

const a = 'testando title h2';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline={ a } />
      </div>
    );
  }
}

export default App;
