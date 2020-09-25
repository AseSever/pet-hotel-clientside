import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL-UI
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Button,
    TableCell,
    TableRow,
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);



function PetListItem(props) {


    
    const pet = props.pet

    return (
        <>
            <StyledTableRow component="th" scope="row">
                <StyledTableCell>{pet.name}</StyledTableCell>
                <StyledTableCell>{pet.pet_name}</StyledTableCell>
                <StyledTableCell>{pet.breed}</StyledTableCell>
                <StyledTableCell>{pet.color}</StyledTableCell>
                <StyledTableCell align="center">{pet.checked_in ? "yes" : "no"}</StyledTableCell>
                <StyledTableCell>
                    <Button
                        color="secondary"
                        onClick={props.dispatch({ type: 'DELETE_PET', payload: pet.id })}
                    >
                        Delete
                    </Button>
                    {pet.checked_in ?
                        <Button
                            onClick={props.dispatch({ type: 'CHECK_OUT', payload: pet.id})}
                        >
                            Check Out
                        </Button>
                        :
                        <Button
                            onClick={props.dispatch({ type: 'CHECK_IN', payload: pet.id})}
                        >
                            Check In
                        </Button>
                    }
                </StyledTableCell>
            </StyledTableRow>
        </>
    );

}

export default connect()(PetListItem);