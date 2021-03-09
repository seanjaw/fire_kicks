import React, { useState } from 'react';
import Products from './components/Products/';
import Navbar from './components/Navbar/';
import Cart from './components/Cart';
import { data } from './lib/data';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

    const handleAddToCart = (product) => {
        const item = checkItemExists(product.id);
        
        if (item){
            let tempCart = [...cart]
            const index = tempCart.indexOf(item);
            tempCart[index]["count"] += 1
            setCart(tempCart =>[...tempCart]);
        } else {
            setCart(cart =>[...cart, product]);
        }
        setCount(count +1)
      };

    const handleRemoveFromCart = (product) => {
        const item = checkItemExists(product.id);
        const index = cart.indexOf(item);
        setCart(cart.filter((_, i) => i !== index)
        )
        setCount(count - cart[index]["count"])

    };

    const checkItemExists = (id) => {
        const product = cart.find(item => item.id === id);
        return product 
    }

    const products = data;

    return (
        <Router>
            <Navbar totalItems={count} />
            <Switch>
                <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/cart">
                    <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
