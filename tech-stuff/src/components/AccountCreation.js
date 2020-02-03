import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AccountCreation = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    location: '',
    username: '',
    password: ''
  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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
      <Form className='w-25'>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type='text'
            name='full_name'
            placeholder='Enter Full Name'
            value={form.full_name}
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='email'
            name='email'
            placeholder='Enter Email'
            value={form.email}
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
        <FormGroup>
          <Label>Username</Label>
          <Input
            type='text'
            name='username'
            placeholder='Enter Username'
            value={form.username}
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={form.password}
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

export default AccountCreation;
