import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Table, TableHead, TableBody, TableCell, TableRow, TextField, Typography } from '@material-ui/core';
import OwnersTableRow from '../OwnersTableRow/OwnersTableRow';


function OwnersTable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  const [heading, setHeading] = useState("Owners");

  return (
    <Container fixed>
      <Typography variant="h5">{heading}</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Number of Pets</TableCell>
                    <TableCell>Remove?</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.reduxState.ownerReducer && props.reduxState.ownerReducer.map( owner => (
                    <OwnersTableRow key={owner.id} owner={owner}/>
                ))}
            </TableBody>

        </Table>
    </Container>
  );
}

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(OwnersTable);