
import React from 'react';
import ReactDOM from 'react-dom';
import Layer1 from './layer1'
import Layer2 from './layer2'
import Layer3 from './layer3'

function App() {
  return 
  <div>
    <Layer1 />
    <Layer2 />
    <Layer3 />
    </div>
};


ReactDOM.render(<App />, document.querySelector('#root'));
    