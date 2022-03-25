import React from 'react'
import '../styles/Recipes.css'
import Card from 'react-bootstrap/Card';
import CaesarSalad from '../images/salad1.jpg';
import Spaghetti from '../images/spaghetti.jpeg';
import Pork from '../images/pork.jpeg';
import Orzo from '../images/orzo.jpeg';
import Burrito from '../images/burrito.jpeg';
import Cabbage from '../images/cabbage.jpeg';
import Casserole from '../images/caserolle.jpeg'; 
import Mac from '../images/mac-cheese.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Recipes() {

  let navigate = useNavigate();

    const cardInfo = [
      
        { image: CaesarSalad, title: "Caesar Salad", info: "Croutons: 1/2 cup extra-virgin olive oil, 2 cups loosely torn country bread, Kosher salt and fresh cracked pepper, 1/4 cup finely grated Parmigiano-Reggiano, 2 tablespoons finely minced fresh parsley, Dressing: 1/2 cup finely grated Parmigiano-Reggiano, 2 tablespoons roasted garlic, 2 tablespoons sherry vinegar, 1 tablespoon Dijon mustard, 6 white anchovies, 1 egg yolk, 1 1/4 cups canola oil, Salad, 30 large leaves from the hearts of romaine lettuce, left whole, Kosher salt and fresh cracked pepper, Small block Pecorino Romano cheese, 18 white anchovies, optional.", button: <Button onClick={() => {navigate("/recipes/0001")}} >Directions</Button>},
        { image: Spaghetti, title: "Classic Shrimp Scampi", info: "Kosher salt, 12 ounces linguine, 1 1/4 pounds large shrimp, peeled and deveined, 1/3 cup extra-virgin olive oil , 5 cloves garlic, minced, 1/4 to 1/2 teaspoon red pepper flakes, 1/3 cup dry white wine, Juice of 1/2 lemon, plus wedges for serving, 4 tablespoons unsalted butter, cut into pieces, 1/4 cup finely chopped fresh parsley.", button: <Button onClick={() => {navigate("/recipes/0002")}}>Directions</Button>},
        { image: Pork, title: "Tricolore Stuffed Pork", info: "1 onion, One 5-pound boneless pork loin, butterflied , 10 slices provolone piccante, 4 whole jarred roasted red peppers, 2 cups baby spinach, 4 sprigs fresh rosemary, 2 cups low-sodium chicken broth, 2 tablespoons olive oil.", button: <Button onClick={() => {navigate("/recipes/0003")}}>Directions</Button>},
        { image: Orzo, title: "Creamy Orzo with Prosciutto and Peas", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil.", button: <Button onClick={() => {navigate("/recipes/0004")}}>Directions</Button>},
        { image: Burrito, title: "Chipotle Veggie Burritos", info: "1 bunch cilantro, chopped, 1 clove garlic, 1/2 teaspoon chipotle chile powder, plus more to taste, Kosher salt, 1 cup white rice, 1 15-ounce can black bean soup, 1 10-ounce package frozen chopped spinach, thawed and squeezed dry, 2 cups frozen corn, thawed, 1 large tomato, diced, Juice of 1 lime, 4 burrito-size flour tortillas, 2 cups shredded pepper jack cheese.", button: <Button onClick={() => {navigate("/recipes/0005")}}>Directions</Button>},
        { image: Cabbage, title: "Cabbage Soup", info: "2 tablespoons olive oil, 8 ounces sliced button mushrooms, 2 large yellow or white onion, chopped, 1 bunch celery, grated, 3 carrots, grated, 2 green peppers, stemmed, seeded and grated, 2 cloves garlic, grated, Half a head green cabbage, shredded, 2 tablespoons low-sodium soy sauce, 1/2 teaspoon garlic powder, 1/2 teaspoon onion powder, Kosher salt and freshly ground black pepper, One 28-ounce can crushed tomatoes, 4 cups low-sodium chicken broth.", button: <Button onClick={() => {navigate("/recipes/0006")}}>Directions</Button>},
        { image: Casserole, title: "Spicy Chili and Cornmeal Casserole", info: "2 tablespoons olive oil, 1/2 cup chopped yellow onion, 1/2 teaspoon cumin, 1/2 teaspoon granulated garlic, 1/2 teaspoon dried oregano, 1 chipotle pepper in adobo sauce, finely chopped, plus 1 teaspoon adobo sauce, 1 teaspoon tomato paste, Freshly ground black pepper, 1 pound lean ground turkey, One 15-ounce can low-sodium black beans, rinsed and strained, One 15-ounce can no-salt-added diced tomatoes, 1/2 cup low-sodium chicken broth, 1/2 cup grated Parmesan, 1 cup instant polenta, 3/4 cup shredded Cheddar, 1 tablespoon sliced pickled jalapenos, strained and chopped, Cooking spray.", button: <Button onClick={() => {navigate("/recipes/0007")}}>Directions</Button>},
        { image: Mac, title: "Baked Mac and Cheese with Hidden Cauliflower", info: "Cooking spray, 1 pound elbow macaroni, Kosher salt, 1 small head cauliflower, cored, 4 tablespoons unsalted butter, 1/2 medium onion, finely chopped, 5 tablespoons all-purpose flour, 4 cups whole milk, 2 cups shredded mild cheddar cheese, 2 cups shredded Colby Jack cheese, 3 tablespoons creamy French onion dip, 1/4 teaspoon cayenne pepper, 2 cups crushed sour cream-and-cheddar potato chips.", button: <Button onClick={() => {navigate("/recipes/0008")}}>Directions</Button>},
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

export default Recipes