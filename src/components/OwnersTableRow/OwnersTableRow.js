import React from 'react';
import { connect } from 'react-redux';
import { Button, TableCell, TableRow } from '@material-ui/core'



function OwnersTableRow(props) {
  
  const handleOwnerDelete = (ownerId) => {
    props.dispatch({ type: "DELETE_OWNER", payload: ownerId })
  }
  return (
    <TableRow>
        <TableCell>{props.owner.name}</TableCell>
        <TableCell>
            {props.reduxState.petReducer 
            && 
            (props.reduxState.petReducer.reduce((accumulator, pet) => { return pet.owner_id == props.owner.id ? accumulator + 1 : accumulator}, 0))}
        </TableCell>
        <TableCell>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={() => handleOwnerDelete(props.owner.id)}
                >Delete
            </Button>
        </TableCell>
    </TableRow>
  );
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(OwnersTableRow);