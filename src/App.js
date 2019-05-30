import React from 'react';
import Header from './components/Header';
import Lastname from './components/Lastname';
import Gender from './components/Gender';
import Address from './components/Address';
import Birthday from './components/Birthday';
import Hobby from './components/Hobby';
import Interest from './components/Interest';

function App() {
  return (
    <div style={{ backgroundColor: '#E4E5E6' }}>
      <Header/>
      <Lastname/>
      <Gender/>
      <Address/>
      <Birthday/>
      <Hobby/>
      <Interest/>
    </div>
  );
}

export default App;
