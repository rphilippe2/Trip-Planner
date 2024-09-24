import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';  // Import the Auth utility for managing authentication state
import { signUp } from "../api/authAPI";  // Import the login function from the API
import { UserLogin } from "../interfaces/UserLogin";  // Import the interface for UserLogin

const SignUp = () => {
  // State to manage the login form data
  const [signUpData, setSignUpData] = useState<UserLogin>({
    username: '',
    email: '',
    password: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Call the sign up API endpoint with signUpData
      const data = await signUp(signUpData);
      // If sign up is successful, call Auth.login to store the token in localStorage
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);  // Log any errors that occur during sign up
    }
  };

  return (
    <section className = "container-fluid">
      <div className ="row text-center" id="title">
        <h1 className = "col mt-5 mb-4"> Sign Up </h1>
      </div>
      
      <div className ="d-flex justify-content-center mt-2" id="signUpForm">
        <div className ="col-md-4 p-3 text-center border border-3 border-dark rounded-5">
          <form className='form sign-up-form' onSubmit={handleSubmit}>
              <h3 className ="mt-1">Username</h3>
              <input 
              className="form-input"
              placeholder="Enter your username"
              type='text'
              name='username'
              value={signUpData.username || ''}
              onChange={handleChange}
              />

              <h3 className ="mt-1">Email</h3>
              <input 
                className="form-input"
                placeholder="Enter your email"
                type='text'
                name='email'
                value={signUpData.email || ''}
                onChange={handleChange}
              />

              <h3 className ="mt-1">Password</h3>
              <input 
                className="form-input"
                placeholder="Enter your password"
                type='password'
                name='password'
                value={signUpData.password || ''}
                onChange={handleChange}
              />
              <div>
                <button className ="btn btn-primary mt-4" type="submit">Sign Up</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  )
};

export default SignUp;
