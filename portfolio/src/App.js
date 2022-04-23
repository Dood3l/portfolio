import './App.css';
import Home from './pages/home';
import Resume from './pages/resume';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
