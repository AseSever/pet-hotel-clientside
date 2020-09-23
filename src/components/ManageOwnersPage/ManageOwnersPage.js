import React, { Component } from 'react';
import { connect } from 'react-redux';
class ManageOwnersPage extends Component {
    render() {
        return(
            <p>Manage Owners Page</p>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(ManageOwnersPage);