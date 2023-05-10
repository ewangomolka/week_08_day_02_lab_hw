import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Products from './components/Product';
import Basket from './components/Basket';
import Home from './components/Home';
import styled from "styled-components";

const App = () => {


  const [pricing, setPricing] = useState([
    {name: "T-shirt", cost: 17.50, image: "tshirt.jpeg"},
    {name: "Jumper", cost: 25, image: "jumper.jpeg"},
    {name: "Trainers", cost: 50, image: "shoe.jpeg"},
    {name: "underwear", cost: 10, image: "pants.jpeg"},
    {name: "Swimsuit", cost: 35, image: "swimsuit.jpeg"},
    {name: "Bucket Hat", cost: 27.50, image: "hat.jpeg"}
  ])


  const [basketProducts, setBasketProducts] = useState([])


  const addToBasket = (product) => {
    setBasketProducts([...basketProducts, product])
}

  const removeFromBasket = (product) => {
    const updatedBasket = [...basketProducts]
    const index = updatedBasket.indexOf(product)
    updatedBasket.splice(index, 1)
    setBasketProducts(updatedBasket)

  }

  return (
    <Router>
      <NavBar/>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products products={pricing} addToBasket={addToBasket}/>}/>
        <Route path="/basket" element={<Basket basketProducts={basketProducts} removeFromBasket={removeFromBasket}/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
