import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LineChartDemo from "./Charts/LineChartDemo.js";

function Home(props) {
  return (
    <>  

    
      <Row className="Welcome">
      <h1>Bonjour <span>Thomas</span> </h1>
      <p> Félicitation ! Vous avez explosé vos ojectifs hier 👏</p>
      </Row>

      <Container> 

       <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
      </Row>

      </Container>

    

    </>
  ); 
}
export default Home;
