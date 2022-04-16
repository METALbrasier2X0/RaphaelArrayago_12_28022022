import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';



function Numbers(props) {
  return (
    <>  

      
      <div className="NumberInfo"><div className="NumberIconDiv" style={{background: props.Color}}><i style={{color: props.ColorIcon}} className={props.Icon}></i></div><div className="NumberInfoContent"><p className="ValueNumber">{props.Info} {props.Mesure}</p> <p className="ValueTitle">{props.Title}</p></div></div>
    

    </>
  ); 
}
Numbers.propTypes = {Color: PropTypes.string, ColorIcon: PropTypes.string, Icon: PropTypes.string, Mesure: PropTypes.string, Info: PropTypes.number, Title: PropTypes.string };

export default Numbers;
