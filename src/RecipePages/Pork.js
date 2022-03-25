import React from 'react'
import Pork1 from '../images/pork.jpeg';
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';

function Pork() {
    const cardInfo = [
        { image: Pork1, title: "Tricolore Stuffed Pork", info: "1 onion, One 5-pound boneless pork loin, butterflied , 10 slices provolone piccante, 4 whole jarred roasted red peppers, 2 cups baby spinach, 4 sprigs fresh rosemary, 2 cups low-sodium chicken broth, 2 tablespoons olive oil."},
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
                 <p>Preheat the oven to 425 degrees F.</p>
               </li>
               <li> Step 2
                 <p>Peel and slice the onion into 4 rounds. 
                    Place in a 13-by-9-inch baking pan and set aside.</p>
               </li>
               <li> Step 3
                 <p> Using the tip of a sharp knife, 
                     score the pork fat in a diamond pattern, 
                     cutting about 1/4-inch deep. 
                     Unroll the loin so it is completely flat and sprinkle with 1/2 teaspoon salt. 
                     Lay the provolone slices over the pork, shingling slightly. 
                     Open the peppers so they lay flat and tear or cut them in half so you are left with 8 triangles. 
                     Lay the peppers flat on top of the cheese, fitting them together like a puzzle. Distribute the spinach evenly over the peppers. 
                     Beginning at one end, roll the pork back up into its original shape with the fat on top. 
                     Tie the loin in 4 places with butcher's twine and sprinkle all over with 3/4 teaspoon salt.
                   </p>
               </li>
               <li> Step 4
                 <p> Set the pork on the bed of onions and scatter the rosemary sprigs around.
                     Pour the broth into the bottom of the pan and drizzle the pork with the olive oil. 
                     Roast golden brown on top, about 50 minutes.
                   </p>
               </li>
               <li> Step 5
                 <p> Baste the pork with the pan juices and reduce the oven temperature to 375 degrees F. 
                     Continue roasting until an instant-read thermometer inserted in the center of the loin registers 150 degrees F, about 40 minutes.
                   </p>
               </li>
               <li> Step 6
                 <p> Allow the pork to rest for 15 minutes before slicing. 
                     Strain the pan juices and serve alongside the pork.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Pork