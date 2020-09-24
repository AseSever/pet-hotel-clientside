import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component stducture for React with default state
// value setup. When making a new component be sure to replace
// the component name PetListItem with the name for the new
// component.
class PetListItem extends Component {
  

  render() {

    const pet = props.pet

    return (
      <div>
        <td>{pet.owner}</td>
        <td>{pet.pet_name}</td>
        <td>{pet.breed}</td>
        <td>{pet.color}</td>
        <td>{!pet.checked_in ? yes : no}</td>
        <td>
            <button>Delete</button>
            {!pet.checked_in ?
                <button>Check Out</button>
                :
                <button>Check In</button>
            }
        </td>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetListItem);