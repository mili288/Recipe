import React from 'react'
import '../styles/Salad.css';
import Card from 'react-bootstrap/Card';
import Sushi5 from '../images/sushi4.jpg';

function Sushi() {
    const cardInfo = [
  { image: Sushi5, title: "Sushi", info: "Tuna Roll: 1 sheet nori paper, 2 to 3 ounces Sushi Rice, recipe follows, 2 ounces sushi grade raw tuna pieces, cut into strips, 1/2 ounce wakame, 1/4 ounce carrot, julienned, Salmon Roll: 2 ounces sushi grade raw salmon pieces, cut into strips, 1/2-ounce cucumber, julienne, 1/4-ounce carrot, julienne, Sushi Rice: 6 ounces uncooked, matured short-grain rice, 8 ounces cold water, 1 to 2-inch strip dried kelp, wiped clean, 1 1/2 tablespoons rice vinegar, 1 tablespoon caster sugar, 1/2 teaspoon salt."}
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
                 <p>Lay out the sheet of nori on a sushi mat, shiny side down. 
                     Top with the Sushi Rice and spread in an even layer, leaving 1/2-inch at the bottom end. 
                     Make a small channel in the center of the rice across the nori strip. 
                     Lay the tuna, wakame and carrot in the channel. 
                     Using the sushi mat as a guide, fold the nori over the filling and roll into a cylinder. 
                     Slice into pieces.</p>
               </li>
               <li> Step 2
                 <p>Lay out the sheet of nori on a sushi mat, shiny side down. 
                    Top with the Sushi Rice and spread in an even layer, leaving 1/2-inch at the bottom end. 
                    Make a small channel in the center of the rice across the nori strip. 
                    Lay the salmon, cucumber and carrot in the channel. 
                    Using the sushi mat as a guide, fold the nori over the filling and roll into a cylinder. 
                    Slice into pieces.</p>
               </li>
               <h4>Sushi Rice</h4>
               <li> Step 3
                 <p>This recipe will make 1 quantity of rice, which is sufficient for 2 uncut large rolls or 4 uncut small rolls or 16 finger sushi.
                   </p>
               </li>
               <li> Step 4
                 <p>This is the basic technique for producing the glutinous, vinegar-flavored rice that forms the basis of all types of sushi. Matured, Japanese or Californian short-grain rice is essential. To vary the quantity of cooked rice, remember that the ratio of uncooked rice to water should be 1 part rice to 1 1/4 parts water.
                   </p>
               </li>
               <li> Step 5
                 <p>Start by washing the rice thoroughly until the water comes clear. Let the rice drain for 30 to 60 minutes. This will allow the grains to absorb moisture and start to swell.
                   </p>
               </li>
               <li> Step 6
                 <p>Put the rice, water and kelp in a pan with a tight fitting lid. Bring the mixture to the boil over a medium heat, removing the kelp just before the boiling point. Cover the pan and simmer for about 10 minutes. (Simmering time will vary depending on the quantity of rice.) Resist the temptation to lift the lid while the rice is cooking.
                   </p>
               </li>
               <li> Step 7
                 <p>Turn off the heat, remove the lid and cover the pan with a tea towel. Leave to cool for 10 minutes. Meanwhile, mix together the rice vinegar, caster sugar and salt in a pan. Heat until the sugar dissolves, then remove from the heat and pour the sushi vinegar into a cool bowl. To stop the vinegar distilling off, sit the bowl in cold water to speed cooling.
                   </p>
               </li>
               <li> Step 8
                 <p>Using a wooden rice paddle, spoon the rice into a rice tub or bowl. Spread it out evenly, then run the paddle briefly through the rice cutting it first from side to side, then from top to bottom.
                   </p>
               </li>
               <li> Step 9
                 <p>Continue cutting - never mashing or stirring - the rice, adding the sushi vinegar a little at a time. At the same time, ask someone to fan the rice to cool it. It should take about 10 minutes to mix in the sushi vinegar thoroughly and bring the rice to room temperature.
                   </p>
               </li>
             </div>
            </div>
            </>
        )
}

export default Sushi