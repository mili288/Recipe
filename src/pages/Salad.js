import React from 'react'
import Card from 'react-bootstrap/Card';
import CaesarSalad from '../images/salad1.jpg';
import '../styles/Salad.css';

function Salad() {
    const cardInfo = [
        { image: CaesarSalad, title: "Caesar Salad", info: "Croutons: 1/2 cup extra-virgin olive oil, 2 cups loosely torn country bread, Kosher salt and fresh cracked pepper, 1/4 cup finely grated Parmigiano-Reggiano, 2 tablespoons finely minced fresh parsley, Dressing: 1/2 cup finely grated Parmigiano-Reggiano, 2 tablespoons roasted garlic, 2 tablespoons sherry vinegar, 1 tablespoon Dijon mustard, 6 white anchovies, 1 egg yolk, 1 1/4 cups canola oil, Salad, 30 large leaves from the hearts of romaine lettuce, left whole, Kosher salt and fresh cracked pepper, Small block Pecorino Romano cheese, 18 white anchovies, optional."},
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
                 <p>For the croutons: 
                   Heat the olive oil over medium-high heat in saute or frying pan. 
                   Once it is hot but not smoking, 
                   add the bread pieces and stir until the bread has been evenly toasted and is golden brown. 
                   Season with salt and pepper. Place the croutons in a bowl with a lining of paper towel to drain the oil. 
                   Immediately toss the cheese into the croutons, followed by the parsley. 
                   Store at room temperature.</p>
               </li>
               <li> Step 2
                 <p>For the dressing: 
                   Combine the cheese, 
                   roasted garlic, vinegar, mustard, anchovies and egg yolk in a food processor. 
                   Blend until a smooth paste has been formed. If necessary, 
                   add 2 tablespoons water to ensure it is a smooth paste, and not clumpy. 
                   With the machine running, emulsify the oil into the paste in a steady stream. 
                   Add more water or vinegar as necessary, depending on how loose or acidic you prefer the dressing.</p>
               </li>
               <li> Step 3
                 <p>To finish the salad: 
                   Place the lettuce leaves onto a serving platter and drizzle the dressing on top. 
                   Season with salt and pepper. 
                   Using a peeler, shave large pieces of the Pecorino cheese over the lettuces, 
                   followed by the croutons and anchovies if using.</p>
               </li>
               <h4>Cook’s Note</h4>
               <p>For roasted garlic, simply cut two heads of garlic in half, 
                 crosswise, exposing the cloves. 
                 Drizzle some extra-virgin olive oil on the exposed garlic, 
                 and season with salt and pepper. Wrap the package and roast in a 375 degree F oven until the garlic is caramelized and soft, 
                 45 to 60 minutes. Remove the cloves and discard the skins.</p>
             </div>
            </div>
            </>
        )
    }
export default Salad