  
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { postRegInfo } from '../utils/actions';

const AccountCreation = props => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    location: ''
  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const reg = e => {
    e.preventDefault();
    props.postRegInfo(form);
    props.history.push('/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Form onSubmit={reg} className='w-25'>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type='text'
            name='username'
            placeholder='Create Username'
            value={form.username}
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='Create Password'
            value={form.password}
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Location</Label>
          <Input
            type='location'
            name='location'
            placeholder='Enter Location'
            value={form.location}
            onChange={handleChanges}
          />
        </FormGroup>
        <Button>Sign up</Button>
        <Link to='/login'>
          <Button color='link' className='ml-2'>
            Already have an account?
          </Button>
        </Link>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { postRegInfo })(AccountCreation);
