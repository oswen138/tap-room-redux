import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onSoldKeg, onClickingEdit } = props;
  let kegsLeft = keg.kegs -1;
  let kegsSoldButton = <button onClick={() => onSoldKeg({
    name: keg.name,
    brand: keg.brand,
    price: keg.price,
    alcoholContent: keg.alcoholContent,
    flavor: keg.flavor,
    kegs: kegsLeft,
    id: keg.id
  })}>Sold!</button>

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.flavor}</h3>
      <p>${keg.price} | %{keg.alcoholContent}</p>
      <p>Kegs Left: {keg.kegs}</p>
      {kegsSoldButton}
      <button onClick={ onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onSoldKeg: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;