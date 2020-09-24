import React, { useState } from 'react';
import { connect } from 'react-redux';


//MATERIAL-UI
import {
    TextField,
    Button
} from '@material-ui/core';


function TemplateFunction(props) {



  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Pet Name"
        value={props.newPet.pet}
        name="pet"
        onChange={props.handlePetInputs('pet')}
      />
      <TextField
        variant="outlined"
        placeholder="Breed"
        value={props.newPet.breed}
        name="breed"
        onChange={props.handlePetInputs('breed')}
      />
      <TextField
        variant="outlined"
        placeholder="Color"
        value={props.newPet.color}
        name="color"
        onChange={props.handlePetInputs('color')}
      />
      <Button
        variant="contained"
        color="default"
        type="submit"
        name="submit"
      >
          Add Pet
      </Button>
    </div>
  );
}

export default connect()(TemplateFunction);