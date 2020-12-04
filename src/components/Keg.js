import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
       <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>Kegs left: {props.kegs}</p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  flavor: PropTypes.string,
  kegs: PropTypes.number,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func 
};

export default Keg;