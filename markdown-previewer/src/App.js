import { useState } from 'react';
import './App.css';
import { Preview } from './components/Preview';
import { DEFAULT } from './utils/markdown';

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT);

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <Preview markdownText={markdown} />
    </div>
  );
}

export default App;
