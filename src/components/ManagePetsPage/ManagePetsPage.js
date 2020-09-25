import React, { useState } from 'react';
import { connect } from 'react-redux';


//MATERIAL-UI
import {
    TextField,
    Button,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Grid
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: 200,
        height: 20,
    },
}));

function ManagePetsPage(props) {
    const classes = useStyles();


    return (
        <div>
            <Grid container justify="center">
                <Grid item>
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
                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel htmlFor="owner">Owner</InputLabel>
                        <Select
                            value={props.newPet.owner}
                            onChange={props.handlePetInputs('owner')}
                        >
                            <MenuItem value=""></MenuItem>
                            {props.reduxState.ownerReducer && props.reduxState.ownerReducer.map((owner, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        value={owner.id}
                                    >
                                        {owner.name}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{ margin: "10px" }}
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="default"
                        type="submit"
                        name="submit"
                    >
                        Add Pet
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ManagePetsPage);