import React, { useEffect, useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { techArray } from '../utils/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TechItems = props => {
  const [tech, setTech] = useState();
  const userID = localStorage.getItem('userID');

  useEffect(() => {
    props.techArray(userID);
    setTech(props.allTech);
  }, []);

  return (
    <div>
      <Card>
        {props.userInfo &&
          props.tech &&
          props.tech.map(item => {
            return (
              <Link to={`/tech/${item.id}`}>
                <CardImg src={item.image} />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.description}</CardText>
                </CardBody>
              </Link>
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
