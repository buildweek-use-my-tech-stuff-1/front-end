import React from 'react'
import { useForm } from 'react-hook-form'

export default function MarioLogin() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  // const testData = [];

  return (
    <div style={{
      margin: 'auto',
      textAlign: 'center',
      width: '20%', 
      border: '1px solid red'
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name: </label>
        <input name="firstName" placeholder="First Name" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.firstName && <p style={{color: 'red'}}>This is a reqquired field</p>}

        <label>Last Name: </label>
        <input name="lastName" placeholder="Last Name" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.lastName && <p style={{color: 'red'}}>This is a reqquired field</p>}

        <label>Email: </label>
        <input name="email" placeholder="Email" type="email" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.email && <p style={{color: 'red'}}>This is a reqquired field</p>}

        <label>Password: </label>
        <input name="password" placeholder="Password" type="password" ref={register({ required: true })} /> <br/>
        {errors.password && <p style={{color: 'red'}}>This is a reqquired field</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
