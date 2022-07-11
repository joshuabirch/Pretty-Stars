import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
      <h1 style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 700, letterSpacing: '-0.05em', textAlign: 'center' }}>PRETTY STARS</h1>
    </div>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById('root')
)
