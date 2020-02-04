import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

const Cards = () => {
    return (
        <div className='test'>
        <Card className='m-3' style={{width: '20%'}}>
            <CardBody>
                <CardTitle>Name</CardTitle>
                <CardImg top width="100%" src="../Images/djm-900nxs2.png" alt="Pioneer DJM900 nexus2"/>
                <CardText>Name</CardText>
                <CardText>Description</CardText>
                <CardText>Price</CardText>
                <CardText>Avaiable ?</CardText>
                <Button>Rent!</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default Cards;
