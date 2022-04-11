import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import LineChartDemo from "./Charts/LineChartDemo.js";
import LineBar from "./Charts/LineBar.js";
import RadarChartco from "./Charts/RadarChartco.js";
import RadialBar from "./Charts/RadialBar.js";
import Numbers from "./Numbers.js";

function Home(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

   /* Code pour prendre l'id de l'url et qui fetch la bonne url*/

  let { id } = useParams();

  let LinkToFetch = "http://localhost:3001/user/"
  LinkToFetch += id

  /* Debut de L'AJAX*/
  
  useEffect(() => {
    fetch(LinkToFetch)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {

          setIsLoaded(false);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    items["data"] = {userInfos: "", keyData: ""};
    return <div>Chargement...</div>;
  } else {
    return (
    <>  
      <Row className="Welcome">
      <h1>Bonjour <span> {items.data.userInfos.firstName} </span> </h1>
      <p> Félicitation ! Vous avez explosé vos ojectifs hier 👏</p>
      </Row>

      <Container> 

       <Row>
          <Col sm={8} >
           <h3 className="activite">Activité quotidienne</h3> 
           <LineBar/>

           <Row className="ChartsLists"> 
           <Col sm={4} className="Charts lineChart" > <h3 className="LineChartTitle">Durée moyenne des sessions</h3>  <LineChartDemo/>  </Col>
           <Col sm={4} className="Charts Radar" >  <RadarChartco/>  </Col>
           <Col sm={4} className="Charts" >  <RadialBar/>  </Col>
            </Row>

          </Col>

          <Col sm={4}>
            <Numbers Info={items.data.keyData.calorieCount} Mesure="kCal" Icon="fa fa-solid fa-fire" Color="rgba(255, 0, 0, 0.2)" ColorIcon="rgba(255, 0, 0, 1)" Title="Calories" /> 
            <Numbers Info={items.data.keyData.proteinCount} Mesure="g" Icon="fas fa-drumstick-bite" Color="#4AB8FF1A" ColorIcon="#4AB8FF" Title="Proteine" /> 
            <Numbers Info={items.data.keyData.carbohydrateCount} Mesure="g" Icon="fab fa-apple" Color="#F9CE231A" ColorIcon="#F9CE23" Title="Glucides" /> 
            <Numbers Info={items.data.keyData.lipidCount} Mesure="g" Icon="fas fa-hamburger" Color="#FD51811A" ColorIcon="#FD5181" Title="Lipides" /> 
          </Col>

      </Row>

      </Container>
    </>
  ); 
  }
}
export default Home;
