import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [cred, setCred] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCred({
      ...cred,
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
          <Label>Username</Label>
          <Input
            type='text'
            name='username'
            placeholder='Enter Username'
            value={cred.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={cred.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Log in</Button>
        <Link to='/'>
          <Button color='link' className='ml-2'>
            Don't have an account?
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
