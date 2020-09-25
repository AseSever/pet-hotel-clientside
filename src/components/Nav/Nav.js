import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const Nav = (props) => {

  return (
    <div className="nav">
      <Link to="/home">
        <Typography variant="h2" className="nav-title">Pet Hotel</Typography>
      </Link>
      <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/owners">Owner Management</Link></li>
          </ul>
        </nav>
    </div>
  );
};

export default connect()(withRouter(Nav));