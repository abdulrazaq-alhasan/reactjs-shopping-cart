import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home } from 'lucide-react';
import Products from './components/Products';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products/>} />
                <Route path="product-details/:id" element={<ProductDetails/>} />
                <Route path="cart" element={<Cart/>} />
            </Routes>
        </div>
    );
}

export default App;
