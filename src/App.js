import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import HomePage from './components/HomePage/HomePage.js';
import SearchMentor from './components/SearchMentor/SearchMentor.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <SearchMentor />
    </div>
  );
}

export default App;
