import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Pizza1 from '../images/detroid.jpeg';

function Pizza() {
    const cardInfo = [
        { image: Pizza1, title: "Detroit-Style Pepperoni Pizza", info: "3 tablespoons olive oil, 1 batch Pizza Dough, recipe follows, 8 ounces sliced pepperoni, about 1/8 inch thick ,look for smaller-size pepperoni sticks, 16 ounces brick cheese, cut into 1/2-inch cubes, Pizza sauce, store-bought or homemade, recipe follows, Pizza Dough: 2 1/4 cups all-purpose flour, 2 teaspoons kosher salt, 1 teaspoon rapid rise yeast, 1 teaspoon sugar, Olive oil, for oiling the bow, Pizza Sauce: 1 tablespoon olive oil, 2 teaspoons dried Italian seasoning, 2 cloves garlic, minced, One 28-ounce can crushed tomatoes, 2 teaspoons sugar, Kosher salt and freshly ground black pepper."},
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
                 <p>Position an oven rack in the bottom of the oven and preheat to the highest temperature setting, 500 to 550 degrees F.</p>
               </li>
               <li> Step 2
                 <p>Pour the oil in a large, square metal cake pan or, ideally, an authentic Detroit-style pizza pan. 
                    Put the Pizza Dough in the pan and gently stretch it out to fit so the dough reaches the corners. 
                    If the dough is being temperamental, set it aside for another 10 minutes to relax and try again.</p>
               </li>
               <li> Step 3
                 <p>Layer the pepperoni on the dough. 
                     Then lay the cheese cubes all over, especially around the perimeter up to the edge of the pan this creates the coveted crispy cheese crust. 
                     Dollop the pizza sauce on top in 3 lines.
                   </p>
               </li>
               <li> Step 4
                 <p>Bake in the ultra-hot oven until bubbly and golden and a crispy cheese crust has formed, 10 to 15 minutes. 
                    Using a fish spatula, loosen up the edges and place on a cutting board. 
                    Slice into squares and serve!
                   </p>
               </li>
               <h4>Pizza Dough</h4>
                
                 <p>Put the flour, salt, yeast and sugar in a food processor with a metal blade attachment and pulse to combine. 
                     Add 1 cup warm water, then process until a ball forms, about 30 seconds if a ball does not form, add a bit more flour. 
                     Process for another 30 seconds, then roll into a tight ball and place in a lightly oiled bowl. 
                     Proof in a warm spot until the dough doubles in size, about 2 hours.
                   </p>
               
               <h4>Pizza Sauce</h4>
               
                 <p>Heat a small saucepot over medium heat and add the oil. 
                    Add the Italian seasoning and garlic and saute until fragrant; 
                    do not let the garlic burn. 
                    Add the tomatoes and sugar and season with salt and pepper. 
                    Bring to a simmer and simmer until concentrated, about 30 minutes. 
                    Set aside to cool.
                   </p>
               
             </div>
            </div>
            </>
        )
}

export default Pizza