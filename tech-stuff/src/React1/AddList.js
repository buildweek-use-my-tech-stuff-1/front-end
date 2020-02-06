import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const Forms = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // console.log('status has changed', status);
        status && setUsers( users => [...users, status])
    }, [status]);
    return (
    <div>
        <Form>
            <label>
                Name:
                <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                {touched.name && errors.name && <p>{errors.name}</p>}
            </label>
            <br/>
            <button type="submit">Submit!</button>
        </Form>
        {users.map(users => (
            <ul key={users.id}>
                
                    <h1>{users.name}</h1>
                
            </ul>
        ))}
    </div> 
    );
  };


const FormikForms = withFormik({
    mapPropsToValues({name}){
        return {
            name: name || ""           
        };
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string().required()
    }),
    handleSubmit(values, {setStatus}) {
        console.log('submitting', values)
        axios.post(
            'https://reqres.in/api/users/', values)
        .then(res => {
            console.log('success', res);
            setStatus(res.data);
            })
        .catch(err =>
            console.log(err.response)
            );
    }
})(Forms);
export default FormikForms;