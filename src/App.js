import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Header from './features/Header/Header/Header';
import Sidebar from './features/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import ProductSinglePage from './pages/ProductSInglePage/ProductSinglePage';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='product/:id' element={<ProductSinglePage/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App;
