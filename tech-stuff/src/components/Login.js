import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Username</Label>
        <Input type='text' name='username' placeholder='Enter Username' />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type='password' name='password' placeholder='Enter Password' />
      </FormGroup>
      <Button>Log in</Button>
    </Form>
  );
};

export default Login;
