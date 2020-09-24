import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetListItem extends Component {
  

  render() {

    const pet = this.props.pet

    return (
      <div>
        
        <td>{pet.owner}</td>
        <td>{pet.pet_name}</td>
        <td>{pet.breed}</td>
        <td>{pet.color}</td>
        <td>{!pet.checked_in ? "yes" : "no"}</td>
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

export default connect()(PetListItem);