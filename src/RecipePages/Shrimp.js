import React from 'react'
import Spaghetti from '../images/spaghetti.jpeg';
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';

function Shrimp() {
    const cardInfo = [
        { image: Spaghetti, title: "Classic Shrimp Scampi", info: "Kosher salt, 12 ounces linguine, 1 1/4 pounds large shrimp, peeled and deveined, 1/3 cup extra-virgin olive oil , 5 cloves garlic, minced, 1/4 to 1/2 teaspoon red pepper flakes, 1/3 cup dry white wine, Juice of 1/2 lemon, plus wedges for serving, 4 tablespoons unsalted butter, cut into pieces, 1/4 cup finely chopped fresh parsley."},
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
                 <p>Bring a large pot of salted water to a boil. 
                    Add the linguine and cook as the label directs. 
                    Reserve 1 cup cooking water, then drain.</p>
               </li>
               <li> Step 2
                 <p>Meanwhile, season the shrimp with salt. 
                     Heat the olive oil in a large skillet over medium-high heat. 
                     Add the garlic and red pepper flakes and cook until the garlic is just golden, 
                     30 seconds to 1 minute. Add the shrimp and cook, stirring occasionally, 
                     until pink and just cooked through, 1 to 2 minutes per side. 
                     Remove the shrimp to a plate. 
                     Add the wine and lemon juice to the skillet and simmer until slightly reduced, 2 minutes. </p>
               </li>
               <li> Step 3
                 <p>Return the shrimp and any juices from the plate to the skillet along with the linguine, 
                     butter and 1/2 cup of the reserved cooking water. 
                     Continue to cook, tossing, until the butter is melted and the shrimp is hot, 
                     about 2 minutes, adding more of the reserved cooking water as needed. Season with salt; stir in the parsley. 
                     Serve with lemon wedges. 
                   </p>
               </li>
             </div>
            </div>
            </>
        )
        }
export default Shrimp