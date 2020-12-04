import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { v4 } from 'uuid'; 
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    const { dispatch } = this.props;
    const action  = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.resetKeg();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    const action = a.selectKeg(selectedKeg)
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action  = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.resetKeg();
    dispatch(action2);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action  = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.resetKeg();
    dispatch(action2);
    const action3 = a.toggleEditing();
    dispatch(action3);
  }

  handleSoldKeg = (kegSold) => {
    const editedMasterKegList = this.props.masterKegList.filter(keg => keg.id !== this.props.selectedKeg.id).concat(kegSold);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing ) {      
      currentlyVisibleState = <EditKegForm keg  = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";

    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = 
       <KegDetail keg = {this.props.selectedKeg} 
       onClickingDelete = {this.handleDeletingKeg}
       onClickingEdit = {this.handleEditClick} 
       onSoldKeg = {this.handleSoldKeg} />
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList kegList={this.props.masterKegList} 
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

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  };
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
}


KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;