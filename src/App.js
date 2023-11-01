import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Header from './features/Header/Header/Header';
import Sidebar from './features/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

      </Router>
    </div>
  )
}

export default App;
