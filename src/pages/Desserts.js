import React from 'react'
import Card from 'react-bootstrap/Card';
import Cookies from '../images/cookies.jpeg';
import BananaBread from '../images/bananabread.jpeg';
import Stars from '../images/stars.jpeg';
import Poppyseed from '../images/poppyseed.jpeg';
import Brownies from '../images/brownies.jpeg';
import Cheesecake from '../images/cheesecake.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Desserts() {
  let navigate = useNavigate();


  const cardInfo = [
    { image: Cookies, title: "Bittersweet Chocolate Chip Cookies", info: "1 cup plus 6 tablespoons unbleached all-purpose flour, 1/2 teaspoon fine salt, 1/2 teaspoon baking soda, 1/2 cup unsalted butter (1 stick), at room temperature, 1/2 cup packed dark brown sugar, 1/2 cup granulated sugar, 1 large egg, at room temperature, 3/4 teaspoon pure vanilla extract, 6 ounces bittersweet chocolate, finely chopped, Confectioners' sugar.", button: <Button onClick={() => {navigate("/recipes/0013")}}>Directions</Button> },
    { image: BananaBread, title: "The Best Banana Bread", info: "1/2 cup melted unsalted butter or vegetable oil, plus more for greasing pan, 1 3/4 cups all-purpose flour, 1 cup toasted pecans, chopped, 1/2 cup granulated sugar, 1 teaspoon baking soda, 1 teaspoon ground cinnamon, 1/2 teaspoon fine salt, 1/4 teaspoon freshly grated nutmeg, 2 large eggs, lightly beaten, 1/4 cup buttermilk, sour cream or yogurt, 1/2 cup light brown sugar, lightly packed, 1 teaspoon pure vanilla extract, 4 soft, very ripe, darkly speckled medium bananas, mashed.", button: <Button onClick={() => {navigate("/recipes/0014")}}>Directions</Button> },
    { image: Stars, title: "Millionaire’s Shortbread Hamantaschen", info: "Dough: 1 1/2 sticks (3/4 cup) unsalted butter, at room temperature, 3/4 cup confectioners’ sugar, 1/2 teaspoon pure vanilla extract, 1 large egg yolk, plus 1 large egg for the egg wash, 1 1/2 cups all-purpose flour, plus more for rolling, 1/4 teaspoon salt, Caramel Filling: 1 cup granulated sugar, 4 tablespoons unsalted butter, 1/2 cup heavy cream, 1/4 teaspoon salt, Chocolate Glaze: 4 ounces semisweet chocolate chips, 4 tablespoons unsalted butter, Edible gold foil, optional.", button: <Button onClick={() => {navigate("/recipes/0015")}}>Directions</Button>},
    { image: Poppyseed, title: "Poppyseed Hamantaschen", info: "Filling: 1/2 cup poppy seeds, 1/2 cup vanilla unsweetened almond milk, 1/3 cup sugar, 1/4 cup honey, 1 teaspoon pure vanilla extract, Pinch kosher salt, Zest and juice of 1/2 lemon, Dough: 1/3 cup unrefined coconut oil, at room temperature, 1/2 cup sugar, Zest of 1 lemon, 3 large eggs, 2 cups all-purpose flour, plus more for rolling the dough, 1 teaspoon baking powder, 1/4 teaspoon kosher salt, 1/3 cup sprinkles of your choice.", button: <Button onClick={() => {navigate("/recipes/0016")}}>Directions</Button>},
    { image: Brownies, title: "Fudgy Keto Brownies", info: "1 stick unsalted butter, melted and cooled, 1/4 cup unsweetened cocoa powder, 2 tablespoons heavy cream, 1 teaspoon vanilla extract, 2 large eggs plus 1 large yolk, at room temperature, 1/3 cup granulated erythritol sweetener, 2/3 cup almond flour, 1/2 teaspoon kosher salt, 1/2 cup chopped nuts or raw unsweetened coconut chips, optional.", button: <Button onClick={() => {navigate("/recipes/0017")}}>Directions</Button>},
    { image: Cheesecake, title: "The Best No-Bake Cheesecake", info: "Crust: 12 ounces graham crackers about 18 sheets, broken into pieces, 1/3 cup packed light brown sugar, 1/4 teaspoon kosher salt, 11 tablespoons unsalted butter, melted, Filling: 1 1/2 cups heavy cream, Three 8-ounce packages cream cheese, at room temperature, 1 1/4 cups granulated sugar, 2 tablespoons lemon juice from 1 lemon, 2 tablespoons sour cream, 2 teaspoons vanilla-bean paste, Fresh berries, for serving.", button: <Button onClick={() => {navigate("/recipes/0018")}}>Directions</Button>},
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
      <div className="grid">
       {cardInfo.map(renderCard)}
      </div>
      </>
  )
}

export default Desserts