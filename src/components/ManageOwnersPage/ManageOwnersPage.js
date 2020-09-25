import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import OwnersTable from '../OwnersTable/OwnersTable';

class ManageOwnersPage extends Component {
    state = {
        newOwner: ''
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

    handleChangeForNewOwner = (event) => {
        this.setState({
            newOwner: event.target.value
        })
    }

    handleOwnerSubmit = () => {
        if ( this.state.newOwner ) {
            this.props.dispatch({type: 'ADD_OWNER', payload: this.state.newOwner})
        } else {
            alert("Please enter the owner's name!")
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h3">Manage Owners Page</Typography>
                <Typography variant="h5">Add Owner</Typography>
                <TextField value={this.state.newOwner} onChange={this.handleChangeForNewOwner}></TextField>
                <Button variant="contained">Submit</Button>
                <OwnersTable />
            </Container>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(ManageOwnersPage);