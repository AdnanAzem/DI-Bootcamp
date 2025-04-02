import { useState, useRef, useEffect } from 'react';

const CharacterCounter = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleInputChange = () => {
    if (inputRef.current) {
      setCount(inputRef.current.value.length);
    }
  };

  // Optional: Focus the input on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="character-counter">
      <h2>Character Counter</h2>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="text-input"
      />
      <div className="counter-display">
        Character count: <span className="count">{count}</span>
      </div>
      {count > 0 && (
        <div className="reset-button" onClick={() => {
          if (inputRef.current) {
            inputRef.current.value = '';
            setCount(0);
          }
        }}>
          Clear Text
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;