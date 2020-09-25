import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import OwnersTable from '../OwnersTable/OwnersTable';

class ManageOwnersPage extends Component {

    state = {
        name: ''
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

    handleChangeForName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOwnerSubmit = () => {
        if ( this.state.name ) {
            this.props.dispatch({type: 'ADD_OWNER', payload: this.state})
            this.setState({
                name: ''
            })
        } else {
            alert("Please enter the owner's name!")
        }
    }

    render() {
        return(
            <Container>
                <Typography variant="h3">Manage Owners Page</Typography>
                <Typography variant="h5">Add Owner</Typography>
                <TextField value={this.state.name} onChange={this.handleChangeForName}></TextField>
                <Button variant="contained" onClick={this.handleOwnerSubmit}>Submit</Button>
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