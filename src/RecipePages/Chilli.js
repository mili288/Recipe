import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Chilli1 from '../images/caserolle.jpeg';

function Chilli() {
    const cardInfo = [
        { image: Chilli1, title: "Spicy Chili and Cornmeal Casserole", info: "2 tablespoons olive oil, 1/2 cup chopped yellow onion, 1/2 teaspoon cumin, 1/2 teaspoon granulated garlic, 1/2 teaspoon dried oregano, 1 chipotle pepper in adobo sauce, finely chopped, plus 1 teaspoon adobo sauce, 1 teaspoon tomato paste, Freshly ground black pepper, 1 pound lean ground turkey, One 15-ounce can low-sodium black beans, rinsed and strained, One 15-ounce can no-salt-added diced tomatoes, 1/2 cup low-sodium chicken broth, 1/2 cup grated Parmesan, 1 cup instant polenta, 3/4 cup shredded Cheddar, 1 tablespoon sliced pickled jalapenos, strained and chopped, Cooking spray."},
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
        </Card.Body>
      </Card>
        )
        }

        return (
            <>
            <div className="grid">
             {cardInfo.map(renderCard)}
             <div>
               <li> Step 1
                 <p>Preheat the oven to 400 degrees F. 
                    Heat the olive oil in a large nonstick skillet over medium-high heat. 
                    Add the onions and cook, stirring, until soft, about 5 minutes. 
                    Lower the heat to medium; add the cumin, garlic, oregano, chipotles, adobo sauce, tomato paste and a few grinds of pepper and stir until combined. 
                    Add the turkey and cook, breaking it up with a spoon, until cooked through, about 8 minutes. Stir in the black beans, tomatoes and chicken broth and cook until the broth is reduced, 8 minutes more. 
                    Stir in 1/4 cup of the Parmesan. Remove from the heat and keep warm.</p>
               </li>
               <li> Step 2
                 <p> Meanwhile, cook the polenta according to package instructions. 
                     Remove from the heat and stir in the Cheddar and chopped jalapenos. 
                     Spray a 3-quart flameproof casserole dish with cooking spray. 
                     Spread the chili in the bottom of the casserole and top with the polenta, spreading evenly to cover the chili completely. 
                     Sprinkle the top with the remaining 1/4 cup Parmesan. 
                     Cover with foil and bake until bubbling, 25 minutes. 
                     Remove the foil and broil until the top is nicely browned, 2 to 5 minutes. Serve hot, with toppings.</p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Chilli