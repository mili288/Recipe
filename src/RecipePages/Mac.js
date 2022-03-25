import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Mac1 from '../images/mac-cheese.jpeg';

function Mac() {
    const cardInfo = [
        { image: Mac1, title: "Baked Mac and Cheese with Hidden Cauliflower", info: "Cooking spray, 1 pound elbow macaroni, Kosher salt, 1 small head cauliflower, cored, 4 tablespoons unsalted butter, 1/2 medium onion, finely chopped, 5 tablespoons all-purpose flour, 4 cups whole milk, 2 cups shredded mild cheddar cheese, 2 cups shredded Colby Jack cheese, 3 tablespoons creamy French onion dip, 1/4 teaspoon cayenne pepper, 2 cups crushed sour cream-and-cheddar potato chips."},
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
                 <p>Preheat the oven to 425 degrees F. 
                     Coat a 9-by-13-inch baking dish with cooking spray. 
                     Cook the pasta in boiling salted water according to the package directions. 
                     Drain and set aside. Meanwhile, grate the cauliflower on the large holes of a box grater or chop it into chunks and pulse to rice-size pieces in a food processor.</p>
               </li>
               <li> Step 2
                 <p> Melt the butter in a large pot over medium heat. 
                     Add the onion and cook, stirring often, until softened, about 5 minutes. 
                     Add the grated cauliflower and 1/2 teaspoon salt and cook, stirring occasionally, until crisp-tender, another 5 minutes. 
                     Add the flour; cook for 1 minute, stirring. Gradually add the milk while stirring constantly, then increase the heat and bring to a boil. 
                     Reduce the heat to medium and simmer, whisking occasionally, until slightly thickened, about 3 minutes.</p>
               </li>
               <li> Step 3
                 <p>Take the pot off the heat and stir in the cheddar, 
                     Colby Jack, French onion dip, cayenne and 1 teaspoon salt until the cheese and dip melt. 
                     Add the cooked pasta and stir to coat. Transfer to the prepared baking dish.
                   </p>
               </li>
               <li> Step 4
                 <p>Top the pasta with the crushed potato chips. 
                     Bake until lightly browned, 8 to 10 minutes "be careful, the potato chips can burn easily".
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Mac