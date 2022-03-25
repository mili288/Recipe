import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Chessecake1 from '../images/cheesecake.jpeg';

function Cheesecake() {
    const cardInfo = [
        { image: Chessecake1, title: "The Best No-Bake Cheesecake", info: "Crust: 12 ounces graham crackers about 18 sheets, broken into pieces, 1/3 cup packed light brown sugar, 1/4 teaspoon kosher salt, 11 tablespoons unsalted butter, melted, Filling: 1 1/2 cups heavy cream, Three 8-ounce packages cream cheese, at room temperature, 1 1/4 cups granulated sugar, 2 tablespoons lemon juice from 1 lemon, 2 tablespoons sour cream, 2 teaspoons vanilla-bean paste, Fresh berries, for serving."},
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
                 <p>For the crust: Add the graham crackers, brown sugar and salt to a food processor and pulse to fine crumbs. Drizzle in the butter and pulse until the crumbs are completely coated with the butter.</p>
               </li>
               <li> Step 2
                 <p>Press the crumb mixture firmly into the bottom and about 1 1/2 inches up the sides of a 10-inch springform pan, with a 1/4-inch thick rim around the border. Use the bottom of a measuring cup to help make the crust even on the sides and bottom. Freeze until firm, about 20 minutes.  </p>
               </li>
               <li> Step 3
                 <p>For the filling: Meanwhile, whip 3/4 cup of the cream in a medium bowl with a whisk until stiff, fluffy peaks form, 3 to 4 minutes or 1 to 2 minutes using an electric mixer on medium speed; set aside.  
                   </p>
               </li>
               <li> Step 4
                 <p>Beat the cream cheese and 1 cup granulated sugar in a stand mixer fitted with the paddle attachment on medium speed until light and fluffy, scraping down the sides of the bowl as needed, 3 to 4 minutes. Reduce the speed to medium-low and add the lemon juice, sour cream and vanilla-bean paste and beat until just combined, 1 to 2 minutes. Gently fold the whipped cream into the cream-cheese mixture with a large rubber spatula.    
                   </p>
               </li>
               <li> Step 5
                 <p>Pour the batter into the springform pan and smooth the top with an offset spatula. Cover tightly and refrigerate until set, 8 hours and up to 24 hours.   
                   </p>
               </li>
               <li> Step 6
                 <p>Just before serving, add the remaining 3/4 cup cream and 1/4 cup granulated sugar to a medium bowl and whip to soft peaks with a whisk, 3 to 4 minutes or 1 to 2 minutes using an electric mixer on medium speed. Spoon the whipped cream into a piping bag fitted with a large star tip.  
                   </p>
               </li>
               <li> Step 7
                 <p>Run a knife around the inside edge of the springform pan to loosen the cake, then open the clasps to release the pan ring. Pipe dollops of whipped cream around the border of the cheesecake and top with fresh berries.   
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Cheesecake