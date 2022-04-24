import './App.css';
import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
