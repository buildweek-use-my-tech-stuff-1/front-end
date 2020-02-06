import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const Cards = props => {
  const [item, setItem] = useState({});
  const [thing, setThing] = useState({});
  const [modal, setModal] = useState(false);
  let itemID = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/tech/${itemID}`)
      .then(res => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const update = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/tech/${itemID}`, thing)
      .then(res => {
        console.log(`Updated`, res);
      })
      .catch(err => {
        console.log(`Not Updated`, err);
      });
  };

  const del = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/tech/${itemID}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleChanges = e => {
    e.preventDefault();
    setThing({
      ...thing,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='test'>
      <Card className='m-3 w-25'>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardImg top width='100%' src={item.image} alt='Generic Tech Item' />
          <CardText>Description: {item.description}</CardText>
          <CardText>Price: {item.price}</CardText>
          <Button onClick={toggle}>Edit</Button>
          <Button className='ml-2' color='danger' onClick={del}>
            Delete
          </Button>
        </CardBody>
      </Card>

      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Item Details</ModalHeader>
          <ModalBody>
            <Form onSubmit={update}>
              <FormGroup>
                <Label>Name:</Label>
                <Input
                  placeholder='Name'
                  onChange={handleChanges}
                  value={thing.name}
                  name='name'
                  type='text'
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  placeholder='Description'
                  onChange={handleChanges}
                  value={thing.description}
                  name='description'
                  type='text'
                />
              </FormGroup>
              <FormGroup>
                <Label>Price:</Label>
                <Input
                  placeholder='Price'
                  onChange={handleChanges}
                  value={thing.price}
                  name='price'
                  type='text'
                />
              </FormGroup>
              <ModalFooter className='justify-content-start'>
                <Button onClick={toggle} type='submit'>
                  Save
                </Button>
                <Button onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Cards;
