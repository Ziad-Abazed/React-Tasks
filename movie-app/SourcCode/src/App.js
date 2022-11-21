import { Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesContainer from './components/MoviesContainer';
import SingleMovie from './components/SingleMovie';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movie/:id" element={<SingleMovie  />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
