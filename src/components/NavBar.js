import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

    const Navigation = styled.ul`
        display: flex;
        align-items: row;
        justify-content: space-evenly;
        list-style: none;
        text-decoration: none;
    `
    const Li = styled.li`
        text-decoration: none;
        color: orange;
        &:hover{
            color: blue;
            text-decoration: underline;
        }
    `

    return (
        <Navigation>
            <li><Link to="/"><Li>Home</Li></Link></li>
            <li><Link to="/products"><Li>Products</Li></Link></li>
            <li><Link to="/basket"><Li>Basket</Li></Link></li>
        </Navigation>
    )
}

export default NavBar;