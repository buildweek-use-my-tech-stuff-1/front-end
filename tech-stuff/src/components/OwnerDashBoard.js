// import React, { useState, useEffect } from 'react';
// import { getReg } from '../utils/actions';
// import { connect } from 'react-redux';

// const OwnerDashBoard = props => {
//   const userID = localStorage.getItem('userID');

//   useEffect(() => {
//     props.getReg(userID);
//   }, []);

//   useEffect(() => {
//     if (!localStorage.getItem('reload')) {
//       window.location.reload();
//       localStorage.setItem('reload', 'done');
//     }
//   }, []);

//   return <></>;
// };

// const mapStateToProps = state => {
//   return {
//     regInfo: state.regInfo,
//     fetching: state.fetching
//   };
// };

// export default connect(mapStateToProps, { getReg })(OwnerDashBoard);
