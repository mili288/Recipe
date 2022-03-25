import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Cookies1 from '../images/cookies.jpeg';

function Cookie() {
    const cardInfo = [
        { image: Cookies1, title: "Bittersweet Chocolate Chip Cookies", info: "2 eggs, at room temperature, 1 cup freshly grated Parmesan, 2 tablespoons olive oil, 4 ounces prosciutto, cut into 1/3-inch dice, 2 shallots, chopped, 2 cups orzo pasta, 1/2 teaspoon salt, 1 cup halved cherry tomatoes, 1 cup frozen peas, thawed, 1/4 cup chopped fresh basil."},
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
                 <p>Preheat the oven to 350 degrees F. Line 2 to 3 baking sheets with parchment paper or re-usable baking sheets.</p>
               </li>
               <li> Step 2
                 <p>Whisk the flour, salt, and baking soda together in a medium bowl, and set aside.</p>
               </li>
               <li> Step 3
                 <p>In a large bowl, cream the butter and sugars with a hand held electric mixer, until light and fluffy. Beat in the egg and then the vanilla. Gradually add the dry ingredients to the creamed mixture. Stir in the chopped chocolate.
                   </p>
               </li>
               <li> Step 3
                 <p>To form the cookies, scoop heaping tablespoons of the dough and roll by hand into balls. Place the balls about 2 inches apart on the baking sheets. Flatten the dough slightly with your fingertips. Bake until light brown, about 12 to 15 minutes. (If baking 2 sheets at a time, rotate the pans halfway through baking.) Transfer cookies to a rack to cool. Lightly dust the cookies with confectioners' sugar, if desired.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Cookie
