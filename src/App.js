import { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

export default function App() {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const checkSpelling = (inputText) => {
    const words = inputText.split(/\s+/);
    for (const word of words) {
      if (customDictionary[word.toLowerCase()]) {
        setCorrection(`Did you mean: ${customDictionary[word.toLowerCase()]}?`);
        return;
      }
    }
    setCorrection('');
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    if (inputText.trim() === '') {
      setCorrection('');
    } else {
      checkSpelling(inputText);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
        style={{ width: '100%', height: '100px', padding: '10px', marginBottom: '10px' }}
      />
      {correction && <p>{correction}</p>}
    </div>
  );
}