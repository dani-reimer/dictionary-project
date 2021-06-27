import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small><a href="https://github.com/dani-reimer/dictionary-project" rel="noreferrer" target="_blank">Open-source code</a> by <a href="https://www.linkedin.com/in/dani-reimer-07180a188/" target="_blank" rel="noreferrer">Dani Reimer</a></small>
        </footer>
    </div></div>
  );
}


