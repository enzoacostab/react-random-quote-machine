import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const [quote, updQuote]=useState({});
  useEffect(()=>{
    getQuote();
  },[]);

  const getQuote=()=>{
    fetch('https://api.quotable.io/random')
    .then((Response)=>{return Response.json()})
    .then((data)=>{updQuote({text:data.content, author:data.author});
    });
  };
  
  return (
    <div className="App">
      <div id='quote-box'>
        <h2 id='text'>{quote.text}</h2>
        <p id='author'>{"-"+quote.author}</p>
        <div id='b'>
        <a href={'https://twitter.com/intent/tweet?text="'+ quote.text+'" -'+quote.author} target='blank' id='tweet-quote'><i className='fa-brands fa-twitter'></i></a>
        <button onClick={getQuote} id='new-quote'>New quote</button>
        </div>
      </div>
    </div>)
}

export default App;
