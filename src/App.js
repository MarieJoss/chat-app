import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
     <Contact name="JC" avatar="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" text="Online" online />
     <Contact name="Bart Simpson" avatar="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638" text="Offline" offline/>
     <Contact name="Nelson Muntz" avatar="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" text="Online" online/>
    </div>
  );
}

export default App;
