import { useState } from 'react';

import './App.css';
import { randomQuotes } from './utils/quote';

function App() {
  const [quote, setQuote] = useState(randomQuotes());
  const setNewQuote = () => {
    setQuote(randomQuotes());
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quote.message}</div>
        <div id="author">{quote.author}</div>
        <div className="group-btn">
          <div className="btn-share">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              Share
            </a>
          </div>
          <div className="btn-action">
            <button id="new-quote" onClick={() => setNewQuote()}>
              new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
