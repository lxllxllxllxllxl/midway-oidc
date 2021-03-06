import React, { useState, useEffect } from 'react';
import logo from '../../../public/image/logo.svg';
import '../../../public/css/App.css';
import hello from '../../apis/lambda';
import { login, register } from '../../apis/lambda/open';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    hello().then((response) => setMessage(response.message));
  }, []);

  const handleClick = async () => {
    const message = window.prompt('Type message!');
    let data = {
      name:"11111",
      pwd:"123234",
      // phone: ""
    }
    const response = await register(data);
    alert(JSON.stringify(response, null, 2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Message from ./apis/lambda: {message}</p>
        <p>
          <button onClick={handleClick}>Send message to backend</button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.yuque.com/midwayjs/faas/hooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Midway Hooks
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
