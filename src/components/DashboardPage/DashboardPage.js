import React, { Component } from 'react';
import { connect } from 'react-redux';
class DashboardPage extends Component {
    render() {
        return(
            <p>Dashboard Page</p>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(DashboardPage);