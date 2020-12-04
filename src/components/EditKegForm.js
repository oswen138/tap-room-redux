import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg, onEditKeg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, flavor: event.target.flavor.value, kegs: event.target.kegs.value, id: keg.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} 
        buttonText="Update Keg" />
    </React.Fragment>
  );
}
eafaegraergrgargasrgasrg

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;