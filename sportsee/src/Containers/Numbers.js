import Container from 'react-bootstrap/Container';



function Numbers(props) {
  return (
    <>  

      
      <div className="NumberInfo"><div className="NumberIconDiv" style={{background: props.Color}}><i style={{color: props.ColorIcon}} className={props.Icon}></i></div><div className="NumberInfoContent"><p className="ValueNumber">{props.Info} {props.Mesure}</p> <p className="ValueTitle">{props.Title}</p></div></div>
    

    </>
  ); 
}
export default Numbers;
