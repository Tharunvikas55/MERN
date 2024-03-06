
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/product" element={<Product/>} />
          <Route path=":productId" element={<Product/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/login'  element={<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    

    </div>
  );
}

export default App;
