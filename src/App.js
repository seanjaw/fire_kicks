import React, { useState, useEffect } from 'react';
import Products from './components/Products/';
import Navbar from './components/Navbar/';
import Cart from './components/Cart';
import Complete from './components/Complete';
import { data } from './lib/data';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
  
    useEffect(()=>{
        setCount(cart.reduce((accumulator, currentValue) => accumulator + currentValue["count"],0), [count])
    })

    const handleAddToCart = (product) => {

        const item = checkItemExists(product.id);

        if (item){
            console.log('this is item', item)
            let objIndex = cart.findIndex((obj => obj.id === item.id));
            const updateCountData = cart.map((data, index) => {
                if(objIndex ===  index){
                    data.count += 1
                }
                return data
            })
            setCart(updateCountData)
        } else {
            setCart(cart =>[...cart, product]);
        }


      };

    const handleRemoveFromCart = (product) => {
        const item = checkItemExists(product.id);
        const index = cart.indexOf(item);
        cart[index]["count"] = 1;
        setCart(cart.filter((_, i) => i !== index));
    };

    const handleEmptyCart = () =>{
        setCart([])
    }

    const checkItemExists = (id) => {
        const product = cart.find(item => item.id === id);
        return product 
    }

    const products = data;
    // console.log('this is cart', cart)
    console.log('this is cart', cart)
    console.log('this is count', count)

    return (
        <Router>
            <Navbar totalItems={count} />
            <Switch>
                <Route exact path="/">
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/cart">
                    <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onEmptyCart = {handleEmptyCart}/>
                </Route>
                <Route exact path="/complete">
                    <Complete/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
