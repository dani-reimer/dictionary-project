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
          <small><a href="https://github.com/dani-reimer/dictionary-project">Open-source code</a> by Dani Reimer</small>
        </footer>
    </div></div>
  );
}


