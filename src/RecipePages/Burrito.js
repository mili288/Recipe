import React from 'react'
import Burrito1 from '../images/burrito.jpeg';
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';

function Burrito() {
    const cardInfo = [
        { image: Burrito1, title: "Chipotle Veggie Burritos", info: "1 bunch cilantro, chopped, 1 clove garlic, 1/2 teaspoon chipotle chile powder, plus more to taste, Kosher salt, 1 cup white rice, 1 15-ounce can black bean soup, 1 10-ounce package frozen chopped spinach, thawed and squeezed dry, 2 cups frozen corn, thawed, 1 large tomato, diced, Juice of 1 lime, 4 burrito-size flour tortillas, 2 cups shredded pepper jack cheese."},
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
                 <p>Puree all but 3 tablespoons cilantro with 2 cups water, 
                     the garlic, chile powder and 3/4 teaspoon salt in a blender until smooth. 
                     Transfer to a medium saucepan along with the rice and bring to a boil. 
                     Reduce the heat to low; cover and cook until the liquid is absorbed, 
                     about 18 minutes. Uncover, stir and let cool 5 minutes.</p>
               </li>
               <li> Step 2
                 <p>Meanwhile, bring the black bean soup to a simmer in a small saucepan over medium-high heat and cook until the liquid is slightly reduced, about 3 minutes. 
                     Stir in the spinach and return to a simmer. Remove from the heat and cover to keep warm. </p>
               </li>
               <li> Step 3
                 <p>Toss the corn, tomato, lime juice, the reserved 3 tablespoons cilantro, 
                     1/2 teaspoon salt, and chile powder to taste in a large bowl.
                   </p>
               </li>
               <li> Step 4
                 <p>Warm the tortillas in a dry skillet or in the microwave. 
                     Divide the rice, bean mixture and cheese among the tortillas; top with some of the corn salsa. 
                     Fold up the bottoms of the tortillas, then fold in the sides and roll up. 
                     Serve with the remaining corn salsa.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Burrito