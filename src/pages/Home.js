import React from 'react'
import Pancakes from '../images/Pancake-Recipe-2-1200.jpg';
import '../styles/Home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Burger from '../images/burger.jpg';
import Pizza from '../images/detroid.jpeg';
import Sushi4 from '../images/sushi4.jpg';
import BigCard from '../pages/HomeComponents';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

const cardInfo = [
  { image: Pancakes, title: "Pancakes", info: "1 1/2 cups all-purpose flour, 3 tablespoons sugar, 1 tablespoon baking powder, 1/4 teaspoon salt, 1/8 teaspoon freshly ground nutmeg, 2 large eggs, at room temperature, 1 1/4 cups milk, at room temperature, 1/2 teaspoon pure vanilla extract, 3 tablespoons unsalted butter, plus more as needed.", button: <Button onClick={() => {navigate("/recipes/0009")}} >Directions</Button>},
  { image: Pizza, title: "Detroit-Style Pepperoni Pizza", info: "3 tablespoons olive oil, 1 batch Pizza Dough, recipe follows, 8 ounces sliced pepperoni, about 1/8 inch thick ,look for smaller-size pepperoni sticks, 16 ounces brick cheese, cut into 1/2-inch cubes, Pizza sauce, store-bought or homemade, recipe follows, Pizza Dough: 2 1/4 cups all-purpose flour, 2 teaspoons kosher salt, 1 teaspoon rapid rise yeast, 1 teaspoon sugar, Olive oil, for oiling the bow, Pizza Sauce: 1 tablespoon olive oil, 2 teaspoons dried Italian seasoning, 2 cloves garlic, minced, One 28-ounce can crushed tomatoes, 2 teaspoons sugar, Kosher salt and freshly ground black pepper.", button: <Button onClick={() => {navigate("/recipes/0011")}}>Directions</Button>},
  { image: Sushi4, title: "Sushi", info: "Tuna Roll: 1 sheet nori paper, 2 to 3 ounces Sushi Rice, recipe follows, 2 ounces sushi grade raw tuna pieces, cut into strips, 1/2 ounce wakame, 1/4 ounce carrot, julienned, Salmon Roll: 2 ounces sushi grade raw salmon pieces, cut into strips, 1/2-ounce cucumber, julienne, 1/4-ounce carrot, julienne, Sushi Rice: 6 ounces uncooked, matured short-grain rice, 8 ounces cold water, 1 to 2-inch strip dried kelp, wiped clean, 1 1/2 tablespoons rice vinegar, 1 tablespoon caster sugar, 1/2 teaspoon salt.", button: <Button onClick={() => {navigate("/recipes/0011")}}>Directions</Button>},
  { image: Burger, title: "Burger", info: "1 1/2 pounds ground chuck 80 percent lean or ground turkey 90 percent lean, Kosher salt and freshly ground black pepper, 1 1/2 tablespoons canola oil, 4 slices cheese, 4 hamburger buns, split; toasted, if desired.", button: <Button onClick={() => {navigate("/recipes/0012")}}>Directions</Button>}
];

const renderCard = (card, index) => {
  return(
    <Card style={{ width: '18rem' }} key={index} className="box">
  <Card.Img variant="top" src={card.image}/>
  <Card.Body>
    <Card.Title style={{cursor: 'text'}}>{card.title}</Card.Title>
    <Card.Text style={{cursor: 'text'}}>
      {card.info}
    </Card.Text>
    <Button>{card.button}</Button>
  </Card.Body>
</Card>
  )
}


  return (
    <>
    <BigCard />
    <div className="grid">
     {cardInfo.map(renderCard)}
    </div>
    </>
  )
}

export default Home