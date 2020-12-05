import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from '../_tests_/actions/index.test';

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
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }


  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
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
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
  }

  handleEditingTicketInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleSoldKeg = (kegSold) => {
    const {dispatch} = this.props;
    const action = a.onSoldKeg(kegSold)
    dispatch(action);
    this.setState({
      editing: false,
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