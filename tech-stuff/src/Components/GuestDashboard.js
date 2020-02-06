import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import MyCard from './MyCard';
import { Col, Row } from 'reactstrap';

const GuestDashboard = () => {
  const [techie, setTechie] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/tech`)
      .then(res => {
        console.log(res);
        setTechie(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className='display-2 text-center'>Tech Items For Sale</h1>
      <Row>
        {techie.map(item => {
          return (
            <MyCard
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </Row>
    </>
  );
};

export default GuestDashboard;
