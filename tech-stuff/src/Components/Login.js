import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [cred, setCred] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    let name = e.target.name;
    setCred({ ...cred, [name]: e.target.value });
  };

  const signIn = e => {
    e.preventDefault();
    // console.log(cred.username);
    // console.log(cred.password);
    // console.log(cred);
    axiosWithAuth()
      .post(`/user/login`, cred)
      .then(res => {
        // console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userID', res.data.id);
        props.history.push(`/owner-dashboard/${res.data.id}`);
      })
      .catch(err => console.log(err));
  };
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Form onSubmit={signIn} className='w-25'>
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
        <Button type='submit'>Log in</Button>
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
