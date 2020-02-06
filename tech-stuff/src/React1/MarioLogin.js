import React from 'react'
import { useForm } from 'react-hook-form'
import CharacterList from './CharacterList';

export default function MarioLogin() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div style={{
      margin: 'auto',
      textAlign: 'center',
      width: '20%', 
      // border: '1px solid red'
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name: </label><br/>
        <input name="name" placeholder="First Name" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.firstName && <p style={{color: 'red'}}>This is a required field</p>}

        <label>Last Name: </label><br/>
        <input name="lastName" placeholder="Last Name" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.lastName && <p style={{color: 'red'}}>This is a required field</p>}

        <label>Email: </label><br/>
        <input name="email" placeholder="Email" type="email" ref={register({ required: true, minLength: 2 })} /> <br/>
        {errors.email && <p style={{color: 'red'}}>This is a required field</p>}

        <label>Password: </label><br/>
        <input name="password" placeholder="Password" type="password" ref={register({ required: true })} /> <br/>
        {errors.password && <p style={{color: 'red'}}>This is a required field</p>}

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
