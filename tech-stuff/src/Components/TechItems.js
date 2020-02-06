import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { techArray } from '../utils/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TechItems = props => {
  const [tech, setTech] = useState();
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    props.techArray(userID);
    setTech(props.techItem);
  }, []);

  return (
    <div>
      <Card>
        {props.allTech.map(item => {
          console.log(item);
          return (
            <>
              <Link to={`/tech/${item.id}`}>
                <CardImg className='w-25' src={item.image} />
              </Link>
              <CardBody className='text-lg-center'>
                <CardTitle className='font-weight-bold'>
                  Name: Foggy Machine
                </CardTitle>
                <CardText className='font-weight-light'>
                  Description: White Clouds ye
                </CardText>
              </CardBody>
            </>
          );
        })}
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { techArray })(TechItems);
