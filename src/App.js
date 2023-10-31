import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Header from './features/Header/Header/Header';
import Sidebar from './features/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>
      </Router>
    </div>
  )
}

export default App;
