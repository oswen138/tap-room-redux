import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

// remove const masterKegList = [
//   {
//     name: 'BerryBloom',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Blueberry Jasmine'

//   },
//   {
//     names: 'Citrus',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Orange, Grapefruit, Ginger'
//   },
//   {
//     names: 'PassionBerry',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Passionfruit, Strawberry'
//   }
// ];

function KegList(props) {
  const { kegList, onKegSelection } = props
  return (
    <React.Fragment>
      <hr/>
      {kegList.map((keg) =>
        <Keg 
          whenKegClicked = { onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          flavor={keg.flavor}
          id={keg.id}
          key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegList;

