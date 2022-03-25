import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Cabbage1 from '../images/cabbage.jpeg';

function Cabbage() {
    const cardInfo = [
        { image: Cabbage1, title: "Cabbage Soup", info: "2 tablespoons olive oil, 8 ounces sliced button mushrooms, 2 large yellow or white onion, chopped, 1 bunch celery, grated, 3 carrots, grated, 2 green peppers, stemmed, seeded and grated, 2 cloves garlic, grated, Half a head green cabbage, shredded, 2 tablespoons low-sodium soy sauce, 1/2 teaspoon garlic powder, 1/2 teaspoon onion powder, Kosher salt and freshly ground black pepper, One 28-ounce can crushed tomatoes, 4 cups low-sodium chicken broth."},
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
                 <p>Heat the oil in a large, heavy-bottomed pot over medium-high heat, until shimmering. 
                     Add the mushrooms and cook, stirring, until soft and brown, about 5 minutes. 
                     Add the onions and cook stirring, until soft and golden, about 8 minutes. 
                     Add the celery, carrots, peppers and garlic and cook, stirring, until the vegetables begin to brown and become fragrant, about 5 minutes. 
                     Stir in the soy sauce, garlic and onion powder, 2 teaspoons salt and 1 teaspoon pepper.</p>
               </li>
               <li> Step 2
                 <p>Add the cabbage to the pot and stir until it begins to wilt, about 2 minutes. 
                     Pour in the crushed tomatoes, chicken broth and 1 cup water. Stir to combine. 
                     Bring to a boil then reduce to a simmer and cook until the cabbage is tender, 30 to 45 minutes. 
                     Season with salt and pepper. </p>
               </li>
               
                   <h4>Cook’s Note</h4>
                 <p>To speed up vegetable prep you can use a food processor fitted with the grater attachment. 
                     Add any liquid accumulated from the shredded vegetables to the soup along with the broth.
                   </p>
               
             </div>
            </div>
            </>
        )
}

export default Cabbage