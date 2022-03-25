import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Poppyseed1 from '../images/poppyseed.jpeg';

function Poppyseed() {
    const cardInfo = [
        { image: Poppyseed1, title: "Poppyseed Hamantaschen", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil."},
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
                 <p>For the filling: Finely grind the poppy seeds, in batches if necessary, in a spice or coffee grinder. Transfer to a small saucepan and stir in the almond milk, sugar, honey, vanilla, salt and lemon zest and juice. Bring to a rapid simmer and cook, stirring often, until thick and jammy if you draw a spoon across the bottom of the pan, you will see a line, 6 to 8 minutes. Transfer to a bowl and let cool completely. </p>
               </li>
               <li> Step 2
                 <p>For the dough: Line 2 baking sheets with parchment paper. Combine the coconut oil and sugar in a mixer fitted with the paddle attachment and beat on high speed until fluffy, about 1 minute. Add the lemon zest and 2 of the eggs, then beat until very smooth, about 1 minute. Add the flour, baking powder and salt and beat on medium-low just until the dough comes together and cleans the side of the bowl. Wrap the dough in plastic and chill until the dough firms up enough to be rolled but is not so cold that it will crack, about 15 minutes. </p>
               </li>
               <li> Step 3
                 <p>Preheat the oven to 350 degrees F.
                   </p>
               </li>
               <li> Step 4
                 <p>Beat the remaining egg with a splash of water. Cut the dough in half. Roll one piece on a floured work surface to about 1/8-inch thick. Use a 3-inch ring cutter to cut out as many circles as you can, saving the scraps. To form the hamantaschen, brush a circle with the egg wash and dollop about a teaspoon of filling in the center. Fold the dough up into 3 corners to form a triangle with the filling exposed in the middle. Don't worry if the hamantaschen don't look completely full at this point; the filling expands as it bakes. Place on the prepared baking sheet. Repeat with the remaining circles and dough half, rerolling the scraps once, if desired.
                   </p>
               </li>
               <li> Step 5
                 <p>Have your sprinkles standing by. Brush the hamantaschen with the egg wash just the dough, not the filling. Bake, rotating the trays from top to bottom halfway through baking, until the filling is bubbly and the dough is set and light golden, about 12 minutes. While the filling is still hot, top with the sprinkles. Let cool before serving.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Poppyseed