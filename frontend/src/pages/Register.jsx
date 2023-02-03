import React, {useState} from 'react';
import {FaUser} from 'react-icons/fa';
import {toast} from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(password !== password2){
      toast.error('Passwords do not match :(');
    }
  }

  const {name, email, password, password2} = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className='form-control' value={name} name='name' id='name' onChange={onChange} placeholder='Enter your name' required />
          </div>
          <div className="form-group">
            <input type="email" className='form-control' value={email} name='email' id='email' onChange={onChange} placeholder='Enter your email' required />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' value={password} name='password' id='password' onChange={onChange} placeholder='Enter your password' required />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' value={password2} name='password2' id='password2' onChange={onChange} placeholder='Confirm your password' required />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register