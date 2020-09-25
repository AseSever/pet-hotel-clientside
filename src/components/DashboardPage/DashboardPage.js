import React, { Component } from 'react';
import { connect } from 'react-redux';

import PetListItems from '../PetListItems/PetListItems';
import ManagePetsPage from '../ManagePetsPage/ManagePetsPage';


import {
  Grid,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
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
    this.props.dispatch({
      type: 'FETCH_OWNERS'
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
  }

  font = { fontWeight: "bold" }

  render() {


    console.log(this.state)
    return (

      // Show Pets here
      <div>
        <Grid container justify="center">
          <Grid item>
            <form onSubmit={this.handlePetSubmit}>
              <ManagePetsPage
                handlePetInputs={this.handlePetInputs}
                newPet={this.state}
              />
            </form>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"

        >
          <Grid item>
            <Table style={{
              border: "1px solid lightgrey",
              borderRadius: "2px",
              margin: "20px"
            }}>
              <TableHead >
                <TableRow >
                  <TableCell style={this.font}>Owner</TableCell>
                  <TableCell style={this.font}>Pet</TableCell>
                  <TableCell style={this.font}>Breed</TableCell>
                  <TableCell style={this.font}>Color</TableCell>
                  <TableCell align="center" style={this.font}>Checked In</TableCell>
                  <TableCell align="center" style={this.font}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxState.petReducer.map(pet => {
                  return (
                    <PetListItems key={pet.id} pet={pet} />
                  )
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
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