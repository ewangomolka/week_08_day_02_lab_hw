import React from 'react';
import styled from "styled-components"

const Home = () => {

    const Image = styled.img`
        width: 1430px;
    `
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        padding-left: 500px;

    `

    return ( 
        <div>
        <Container>
        <h1>Welcome to Greggs Retail.</h1>
        <p> The sausage rolls may be cold but our fashion is HOT!</p>
        </Container>
        <Image src="background.jpeg" alt="image"/>
        </div>
     );
}
 
export default Home;