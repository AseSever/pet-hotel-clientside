import React, { Component } from 'react';
import { connect } from 'react-redux';

import PetListItems from '../PetListItems/PetListItems';
import ManagePetsPage from '../ManagePetsPage/ManagePetsPage';


import {
  Grid
} from '@material-ui/core';

class DashboardPage extends Component {

  state = {
    pet: '',
    breed: '',
    color: '',
    owner: '',
  }

  componentDidMount = () => {
    // fetch pets for dom
    this.props.dispatch({
      type: 'FETCH_PETS'
    })
  }

  handlePetInputs = (propertyName) => (event) => {
    console.log(`In change of ${propertyName}`);

    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  }

  handlePetSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      {
        type: 'ADD_PET',
        payload: this.state
      });

    this.props.history.push('/mynotes');
  }

  render() {
    return (
      // Show Pets here
      <div>
        <form onSubmit={this.handlePetSubmit}>
          <ManagePetsPage
            handlePetInputs={this.handlePetInputs}
            newPet={this.state}
          />
        </form>

        <p>Dashboard Page</p>
        <table>

          <tbody>
            <tr>
              <th>Owner</th>
              <th>Pet</th>
              <th>Breed</th>
              <th>Color</th>
              <th>Checked In</th>
              <th>Actions</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
      
            {this.props.reduxState.petReducer && this.props.reduxState.petReducer.map(pet => {

              return (
                <PetListItems key={pet.id} pet={pet} /> // Component for pets 
              )
            })} */}

            </tr>
          </tbody>
        </table>
      </div>
    );
  };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(DashboardPage);