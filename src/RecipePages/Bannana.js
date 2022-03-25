import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Bannana1 from '../images/bananabread.jpeg';

function Bannana() {
    const cardInfo = [
        { image: Bannana1, title: "The Best Banana Bread", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil."},
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
                 <p>Preheat the oven to 350 degrees F. Lightly butter one 9-by-5-inch loaf pan.</p>
               </li>
               <li> Step 2
                 <p>Whisk together the flour, pecans, granulated sugar, baking soda, cinnamon, salt and nutmeg in a large bowl. Whisk together the eggs, melted butter, buttermilk, brown sugar and vanilla in a medium bowl; stir in the mashed bananas. Fold the banana mixture into the flour mixture until just combined</p>
               </li>
               <li> Step 3
                 <p>Pour the batter into the buttered pan and lightly tap the pan on the counter to evenly distribute the batter. Bake until browned and a toothpick inserted into the center comes out completely clean, about 1 hour. Let the bread cool for 10 minutes in the pan, then turn out onto a rack to cool completely.
                   </p>
               </li>
               <h4>Cook’s Note</h4>
               <p>To make this banana bread nut-free, just leave out the pecans and follow the rest of the recipe as written. When measuring flour, we spoon it into a dry measuring cup and level off excess.</p>
             </div>
            </div>
            </>
        )
}

export default Bannana