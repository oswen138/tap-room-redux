import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { v4 } from 'uuid'; 

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {name: "Perky Pear", brand: "MousHaus", price: 3.50, alcoholContent: 3.5, flavor: "Pear-Ginger", kegs: 5, id: v4()},
        {name: "Teary Berry", brand: "Biko Juices", price: 2.99, alcoholContent: 3.5, flavor: "Blueberry-Boysenberry", kegs: 8, id: v4()},
        {name: "Savannah Dragon", brand: "MousHaus", price: 3.50, alcoholContent: 3.5, flavor: "Raspberry-lime", kegs: 10, id: v4()},
        {name: "Loopy Strawberry", brand: "Biko Juices", alcoholContent: 3.5, price: 2.99, flavor: "Strawberry-Mint", kegs: 12, id: v4()}
      ],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false 
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedTicket: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedTicket: null
      });
  }

  handleSoldKeg = (kegSold) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegSold);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg  = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";

    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = 
       <KegDetail keg = {this.state.selectedKeg} 
       onClickingDelete = {this.handleDeletingKeg}
       onClickingEdit = {this.handleEditClick} 
       onSoldKeg = {this.handleSoldKeg} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList kegList={this.state.masterKegList} 
        onKegSelection={this.handleChangingSelectedKeg} 
        />;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;