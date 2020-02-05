import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const Cards = props => {
  return (
    <div className='test'>
      <Card className='m-3' style={{ width: '20%' }}>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardImg
            top
            width='100%'
            src='https://www.pioneerdj.com/-/media/pioneerdj/images/products/mixer/djm-900nxs2/black/djm-900nxs2-main2.png?h=768&w=1024&hash=62AD7EB7FAB2CC535B2056C149DCA1C29AB5000D'
            alt='Pioneer DJM900 nexus2'
          />
          <CardText>Model #: </CardText>
          <FormGroup>
            <Label for='exampleText'>Text Area</Label>
            <Input type='textarea' name='text' id='exampleText' />
          </FormGroup>
          <CardText>{props.price}</CardText>
          <CardText>Avaiable ?</CardText>
          <Button>Rent!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
