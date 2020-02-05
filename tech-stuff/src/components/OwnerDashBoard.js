import React, { useEffect } from 'react';
import Cards from './Cards';
import TechItems from './TechItems';
import { Media } from 'reactstrap';
import { getUser } from '../utils/actions';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import img from '../Images/default-profile.png';

const OwnerDashBoard = props => {
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    props.getUser(userID);
  }, []);

  return (
    <div>
      <Media>
        <Media left href='#'>
          <Link>
            <Media object src={img} alt='Generic placeholder image' />
            {/* <Button color='link'>Change Image</Button> */}
          </Link>
        </Media>
        <Media body>
          <Media heading>{props.userInfo.username}</Media>
          <Media>{props.userInfo.location}</Media>
        </Media>
      </Media>
      <button>Add Device</button>
      <button>Update/Edit</button>
      <TechItems />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { getUser })(OwnerDashBoard);
