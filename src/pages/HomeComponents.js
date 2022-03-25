import React from "react"
import Card from 'react-bootstrap/Card';
import Sushi2 from '../images/sushi2.jpg';
import '../styles/HomeComponents.css';
import newBanner3 from '../images/newBanner.jpg';
import newBanner1 from '../images/newBanner1.jpg';
import Button from 'react-bootstrap/Button';



function HomeComponents() {
    
        return( 
        <>
        <Card className="bg-dark text-white" >
      <Card.Img src={newBanner3} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{ fontSize: '60px', textAlign: 'center'}}>Basic Food Recipes</Card.Title>
        <Card.Text className="text1">
          These are some basic recipe ingredients for you to try.
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
     </>
        )
}

export default HomeComponents

