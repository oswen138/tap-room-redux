import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  const { kegList, onKegSelection } = props
  return (
    <React.Fragment>
      <hr/>
      {kegList.map((keg) =>
        <Keg 
          whenKegClicked = { onKegSelection }
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          kegs = {keg.kegs}
          flavor = {keg.flavor}
          id = {keg.id}
          key = {keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegList;

erer