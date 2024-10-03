import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Header from './features/Header/Header/Header';
import Sidebar from './features/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import ProductSinglePage from './pages/ProductSInglePage/ProductSinglePage';
import Footer from './features/Footer/Footer';
import CartPage from './pages/CartPage/CartPage';
import CategoryProductPage from './pages/CategoryProductPage/CategoryProductPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
         <Route path='product/:id' element={<ProductSinglePage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='category/:category' element={<CategoryProductPage />}/>\
        <Route path='search/:searchTerm' element={<SearchPage/>}/> 
      </Routes>
  
      <Footer/>
      </Router>
    </div>
  )
}

export default App;
