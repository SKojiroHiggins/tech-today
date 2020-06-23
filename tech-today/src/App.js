import React from 'react';
import './App.css';
import MyRouter from './Components/Routes/Routes'
import ContentHero from './Components/ContentHero'
function App() {
  return (
    <div className="App">
      <MyRouter/>
      <ContentHero />
    </div>
  );
}

export default App;
