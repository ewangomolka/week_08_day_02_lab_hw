import React from 'react';
import styled from 'styled-components';


const Basket = ({basketProducts, removeFromBasket}) => {

    const Button = styled.button`
        background-color: rgb(251, 58, 58);
        color: black;
        margin: 5px;
        border: 2px solid grey; 
        border-radius: 8px;
        &:hover {
            color: white;
            background-color: darkred;
        }
        `
    const ItemList = styled.ul`
        list-style: none;
    `
    const ListItem = styled.div`
        display: flex;
        flex-direction: column;
    `

    const Image = styled.img`
        height: 150px;
        width: 150px;
    `

    const Basket = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const Footer = styled.h4`
        border: 5px solid black;
        width: 250px;
        border-radius: 10px;
        padding: 10px;
    `

    let total = 0
    

    const basketItems = basketProducts.map((product, index) => {

        total += product.cost
        return <ListItem><li key={index}><Image src={require("../../public/" + product.image)} alt="product"/><p>{product.name}: £{product.cost} </p><Button type="submit" onClick={()=>{removeFromBasket(product)}}>delete</Button></li></ListItem>
    })
    return ( 
        <Basket>
        <h2>Basket total</h2>
        {total >0 ? <p>You have {basketItems.length} items in your Basket</p>: <p>Your basket is empty</p>}
        <ItemList>
            {basketItems}   
        </ItemList>
        <Footer>Total to pay: £{total}</Footer> 
        </Basket>
     );
}
 
export default Basket;