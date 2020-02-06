import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Col
} from 'reactstrap';

const MyCard = props => {
  return (
    <Col xs='6' sm='4'>
      <Card className='m-3'>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardImg top width='100%' src={props.image} alt='Generic Tech Item' />
          <CardText>Description: {props.description}</CardText>
          <CardText>Price: {props.price}</CardText>
          <Button>Rent!</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyCard;
