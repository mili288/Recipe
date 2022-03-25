import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Millionare1 from '../images/stars.jpeg';

function Millionare() {
    const cardInfo = [
        { image: Millionare1, title: "Millionaire’s Shortbread Hamantaschen", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil."},
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
                 <p>For the dough: Beat the butter and sugar together in a large bowl with an electric mixer until light and fluffy, about 2 minutes. Beat in the vanilla and egg yolk just until combined. Switch to a wooden spoon or use your hands to gradually mix in the flour and salt until combined and the dough is uniform. Do not over-mix. The dough should be slightly tacky; if it’s very sticky add a little more flour 1 tablespoon at a time. Gather the dough into a ball, flatten into a disk, wrap in plastic wrap and refrigerate at least 2 hours or overnight.</p>
               </li>
               <li> Step 2
                 <p>For the caramel filling: Place the sugar in a medium heavy-bottom saucepan and cook, stirring, over medium heat. The sugar will clump up at first and then melt into a brown liquid; lower the heat if it starts to burn. This will take about 10 minutes so be patient!  </p>
               </li>
               <li> Step 3
                 <p>Combine the butter, cream and salt in a separate small saucepan and place over medium heat just until the butter melts. Once the sugar is melted, slowly whisk the cream mixture into the sugar until uniform in color. Simmer for 2 minutes without stirring. Remove from the heat. Transfer to a small bowl and refrigerate, covered, until firm, about 2 hours.   
                   </p>
               </li>
               <li> Step 4
                 <p>When you are ready to form the hamantaschen, roll the dough out on a lightly floured surface to about 1/4-inch-thick. If your dough cracks as you roll, let it warm up to room temperature before continuing to roll.    
                   </p>
               </li>
               <li> Step 5
                 <p>Cut out circles with a 3-inch round cookie cutter (the top of a wine glass works too!). Gather any scraps, roll them out and cut more circles. Beat the remaining egg and 1 teaspoon of water together in a small bowl. Brush each circle with some of the egg wash.   
                   </p>
               </li>
               <li> Step 6
                 <p>Place a teaspoon of the caramel in the center of each circle. Do not over-fill; excess will leak out. If you are having a hard time scooping the caramel, let it come to room temperature. You can scoop out all the teaspoons of caramel first, then place them in the centers of the hamantaschen.    
                   </p>
               </li>
               <li> Step 7
                 <p>Fold two sides of each circle together overlapping at the bottom, and then fold the top down to make a triangle. There should be a quarter-sized amount of the caramel showing. Place hamantaschen 1 inch apart on 2 parchment-lined cookie sheets. Place in the freezer for 30 minutes; this will prevent them from spreading and opening during baking—do not skip this step.    
                   </p>
               </li>
               <li> Step 8
                 <p>While the cookies chill, preheat the oven to 350 degrees F.     
                   </p>
               </li>
               <li> Step 9
                 <p>Bake the cookies until lightly golden on the bottoms, 10 to 12 minutes. Do not over-bake. Cool for 5 minutes on the baking sheet, then transfer to a rack to cool completely.     
                   </p>
               </li>
               <li> Step 10
                 <p>For the chocolate glaze: Place the chocolate chips in the top of a double boiler set over simmering water and stir frequently until melted. Remove from the heat and add the butter. Stir until the butter is melted and glaze is shiny. If the butter doesn’t melt completely, return the top of the double boiler to the heat and stir until smooth. Let the glaze cool until thick enough to coat the back of a spoon but not so long that it hardens.      
                   </p>
               </li>
               <li> Step 11
                 <p>Dip one corner of each cooled hamantaschen into the chocolate and place them on a wire rack. Let sit at room temperature until the chocolate is firm; you can place the cookies in the refrigerator to speed up the process. Decorate the cookies with edible gold foil if using. The cookies will keep at room temperature in an airtight container for up to 3 days or can be frozen for up to 2 months.      
                   </p>
               </li>
               <h4>Cook’s Note</h4>
               <p>The dough can be made up to 3 days ahead and refrigerated or frozen for up to 2 months. The caramel can be made up to five days ahead and refrigerated. Make the chocolate glaze right before using as it hardens as it cools.</p>
             </div>
            </div>
            </>
        )
}

export default Millionare