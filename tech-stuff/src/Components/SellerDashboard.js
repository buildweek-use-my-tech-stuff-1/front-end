import React, { useEffect, useState } from 'react';
import TechItems from './TechItems';
import { Jumbotron } from 'reactstrap';
import { getUser } from '../utils/actions';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SellerDashboard = props => {
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    props.getUser(userID);
  }, []);

  return (
    <div>
      <div>
        {/* <Button color='link'>Change Image</Button> */}
        <Jumbotron>
          <img src={props.userInfo.user_image} />
          <h1 className='display-3'>{props.userInfo.username}</h1>
          <p className='lead'>Location: {props.userInfo.location}</p>
          <hr className='my-2' />
          <p>
            <span className='font-weight-bold'>About:</span> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras sed nisl suscipit,
            convallis dui et, rutrum arcu. Suspendisse tempor magna vel lectus
            rhoncus, sit amet lobortis nisl gravida. Morbi semper urna non
            turpis feugiat, vitae laoreet tortor imperdiet. Integer euismod,
            neque dignissim dictum rhoncus, augue arcu mattis urna, in imperdiet
            risus nulla eu urna. Ut blandit mattis quam a luctus. Nam ultrices
            diam in erat venenatis, lacinia pulvinar tellus maximus. Duis
            facilisis lorem quis purus mattis, ac efficitur nisl ullamcorper.
          </p>
        </Jumbotron>
      </div>
      {/* <button>Add Device</button>
      <button>Update/Edit</button> */}
      <div className='text-center'>
        <h1 className='display-3'>Items For Sale</h1>
        <TechItems />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { getUser })(SellerDashboard);
