import React, {useState, useEffect} from 'react';
import './App.css';
import img from './laughing-panda.jpeg';

// const API_URL = `https://api.humorapi.com/jokes/random`;
const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    generateJoke();
  }, [])

  return (
    <div class="box">
        <h1>
          Cici's Kids Jokes Generator
        </h1>
        <p dangerouslySetInnerHTML = {{__html: joke}} />
        <button onClick={generateJoke}>Show me a joke!</button>
        <img src={img} className="cartoon" alt="laughing panda bear cartoon" /> 
    </div>
  );
}

export default App;
