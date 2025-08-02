import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home } from 'lucide-react';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products/>} />
                <Route path="cart" element={<Cart/>} />
            </Routes>
        </div>
    );
}

export default App;
