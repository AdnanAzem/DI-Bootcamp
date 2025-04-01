import React, { useState } from 'react';
import quotes from '../QuotesDatabase';
import './RandomQuote.css';

function QuoteBox() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getNewQuote() {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === currentQuote.quote && quotes.length > 1);
    
    setCurrentQuote(newQuote);
    setCurrentColor(getRandomColor());
  }

  // Apply the color to body background
  document.body.style.backgroundColor = currentColor;

  return (
    <div 
      className="quote-box" 
      style={{ 
        backgroundColor: 'white',
      }}
    >
      <h1 className="quote-text" style={{ color: currentColor }}>
        "{currentQuote.quote}"
      </h1>
      <p className="quote-author" style={{ color: currentColor }}>
        - {currentQuote.author}
      </p>
      <button 
        className="new-quote-btn"
        style={{ 
          backgroundColor: currentColor,
          color: 'white'
        }}
        onClick={getNewQuote}
      >
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;