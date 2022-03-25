import React from 'react'
import Orzo1 from '../images/orzo.jpeg';
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';

function Orzo() {
    const cardInfo = [
        { image: Orzo1, title: "Creamy Orzo with Prosciutto and Peas", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil."},
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
                 <p>Whisk together the eggs and Parmesan in a small bowl. 
                     Set aside.</p>
               </li>
               <li> Step 2
                 <p>Heat the olive oil in a medium skillet over medium-high heat. 
                     Add the prosciutto and cook until beginning to brown and get crispy, 4 minutes. 
                     Add the shallots and cook, stirring with a wooden spoon, until softened and fragrant, 2 minutes. 
                     Stir in the orzo and toast for 3 minutes. Add 3 1/4 cups water and the salt, reduce the heat to medium low and simmer for 8 minutes, stirring often to prevent sticking. 
                     Stir in the tomatoes and peas. Cook until the orzo is al dente, another 3 minutes. </p>
               </li>
               <li> Step 3
                 <p>Off the heat, add the egg mixture to the skillet while stirring constantly with a wooden spoon. 
                     Continue stirring until the sauce has thickened slightly and coats the pasta. 
                     Sprinkle with the basil and serve.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Orzo