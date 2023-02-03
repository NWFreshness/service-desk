import React, {useState} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const {email, password} = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support!</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
  
          <div className="form-group">
            <input type="email" className='form-control' value={email} name='email' id='email' onChange={onChange} placeholder='Enter your email' required />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' value={password} name='password' id='password' onChange={onChange} placeholder='Enter your password' required />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login