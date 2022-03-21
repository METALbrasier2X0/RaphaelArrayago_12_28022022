import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LineChartDemo from "./Charts/LineChartDemo.js";
import LineBar from "./Charts/LineBar.js";
import Numbers from "./Numbers.js";



function Home(props) {
  return (
    <>  

    
      <Row className="Welcome">
      <h1>Bonjour <span>Thomas</span> </h1>
      <p> Félicitation ! Vous avez explosé vos ojectifs hier 👏</p>
      </Row>

      <Container> 

       <Row>
          <Col sm={8}>
           <LineBar/>

          </Col>

          <Col sm={4}>
            <Numbers Info="1200Kcal" Icon="fa fa-solid fa-fire" Color="rgba(255, 0, 0, 0.2)" ColorIcon="rgba(255, 0, 0, 1)" Title="Calories" /> 
            <Numbers Info="50g" Icon="fas fa-drumstick-bite" Color="#4AB8FF1A" ColorIcon="#4AB8FF" Title="Proteine" /> 
            <Numbers Info="290g" Icon="fab fa-apple" Color="#F9CE231A" ColorIcon="#F9CE23" Title="Glucides" /> 
            <Numbers Info="20g" Icon="fas fa-hamburger" Color="#FD51811A" ColorIcon="#FD5181" Title="Lipides" /> 
          </Col>

      </Row>

      </Container>

    

    </>
  ); 
}
export default Home;
