import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Pancakes1 from '../images/Pancake-Recipe-2-1200.jpg';

function Pancakes() {
    const cardInfo = [
        { image: Pancakes1, title: "Pancakes", info: "1 1/2 cups all-purpose flour, 3 tablespoons sugar, 1 tablespoon baking powder, 1/4 teaspoon salt, 1/8 teaspoon freshly ground nutmeg, 2 large eggs, at room temperature, 1 1/4 cups milk, at room temperature, 1/2 teaspoon pure vanilla extract, 3 tablespoons unsalted butter, plus more as needed."},
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
                 <p>In a large bowl, whisk together the flour, sugar, baking powder, salt, and nutmeg.</p>
               </li>
               <li> Step 2
                 <p>In another bowl, beat the eggs and then whisk in the milk and vanilla.</p>
               </li>
               <li> Step 3
                 <p>Melt the butter in a large cast iron skillet or griddle over medium heat.
                   </p>
               </li>
               <li> Step 4
                 <p>Whisk the butter into the milk mixture. 
                     Add the wet ingredients to the flour mixture, 
                     and whisk until a thick batter is just formed.
                   </p>
               </li>
               <li> Step 5
                 <p>Keeping the skillet at medium heat, ladle about 1/4 cup of the batter onto the skillet, to make a pancake. 
                    Make 1 or 2 more pancakes, taking care to keep them evenly spaced apart. 
                    Cook, until bubbles break the surface of the pancakes, and the undersides are golden brown, about 2 minutes. 
                    Flip with a spatula and cook about 1 minute more on the second side. 
                    Serve immediately or transfer to a platter and cover loosely with foil to keep warm. 
                    Repeat with the remaining batter, adding more butter to the skillet as needed.
                   </p>
               </li>
               <li> Step 6
                 <p>Procedure for adding fruit to pancakes: Once the bubbles break the surface of the pancakes, 
                     scatter the surface with sliced or diced fruit, or chocolate chips, nuts, etc. 
                     Flip with a spatula and cook for 1 minute more, being careful not to burn toppings.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Pancakes