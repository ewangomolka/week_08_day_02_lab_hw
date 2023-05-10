import React from 'react';
import styled from "styled-components";

const Products = ({products, addToBasket}) => {

    const Button = styled.button`
        background-color: rgb(29, 171, 48);
        color: black;
        margin: 5px;
        border: 2px solid grey; 
        border-radius: 8px;
        width: 100px;
        &:hover {
            color: white;
            background-color: darkgreen;
        }
        `

    const ListItem = styled.li`
        display: flex;
        flex-direction: column;
        padding: 10px;
    `
    const Image = styled.img`
        height: 200px;
        width: 200px;
    `
    const List = styled.ul`
        display: grid;
        justify-content: center;
        grid-template-columns: 30% 30% 30%;
    `
    const Header = styled.h3`
        padding-left: 575px;
    `
    const Container = styled.div`
        padding-left: 115px;
    `
    
    const listProducts = products.map((product, index) => {
        return <ListItem key={index}><Image src={require("../../public/" + product.image)} alt="product" /><p>{product.name}:</p><p>£{product.cost}</p><Button type="submit" onClick={() => {addToBasket(product)}}>Add to Basket</Button></ListItem>})
        

    return ( 
        <Container>
            <Header>Products</Header>
            <List>
                {listProducts}
            </List>
        </Container>
     );
}
 
export default Products;