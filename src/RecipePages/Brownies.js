import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Brownies1 from '../images/brownies.jpeg';

function Brownies() {
    const cardInfo = [
        { image: Brownies1, title: "Fudgy Keto Brownies", info: "1 stick unsalted butter, melted and cooled, 1/4 cup unsweetened cocoa powder, 2 tablespoons heavy cream, 1 teaspoon vanilla extract, 2 large eggs plus 1 large yolk, at room temperature, 1/3 cup granulated erythritol sweetener, 2/3 cup almond flour, 1/2 teaspoon kosher salt, 1/2 cup chopped nuts or raw unsweetened coconut chips, optional. "},
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
                 <p>Preheat the oven to 325 degrees F. Line an 8-inch square glass or ceramic baking dish with parchment, leaving an overhang on 2 sides. </p>
               </li>
               <li> Step 2
                 <p>Whisk together the butter, cocoa powder, heavy cream and vanilla in a medium bowl. Add the eggs and yolk and whisk to combine. </p>
               </li>
               <li> Step 3
                 <p>Set aside a large pinch of the sweetener for the top. Whisk together the almond flour, salt and remaining sweetener in a separate medium bowl.
                   </p>
               </li>
               <li> Step 4
                 <p>Add the flour mixture to the butter-cocoa mixture and stir to combine. Scrape the batter into the prepared baking dish and use an offset spatula to spread it to the edges in an even layer. Sprinkle with the nuts or coconut chips if using. Sprinkle with the reserved sweetener.   
                   </p>
               </li>
               <li> Step 5
                 <p>Bake until the edges of the brownie are matte and completely set but the center is still slightly shiny, 18 to 20 minutes. Cool in the baking dish for about 10 minutes, then use the parchment to transfer the brownie to a wire rack to cool completely. Cut into 12 pieces. Store at room temperature in an airtight container for up to 3 days.
                   </p>
               </li>
               <h4>Cook’s Note</h4>
               <p>Erythritol, a sugar substitute, can be found in most health food stores or online.</p>
             </div>
            </div>
            </>
        )
}

export default Brownies