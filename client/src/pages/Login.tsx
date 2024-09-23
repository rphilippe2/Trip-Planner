import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';  // Import the Auth utility for managing authentication state
import { login } from "../api/authAPI";  // Import the login function from the API
import { UserLogin } from "../interfaces/UserLogin";  // Import the interface for UserLogin

const Login = () => {
  // State to manage the login form data
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Call the login API endpoint with loginData
      const data = await login(loginData);
      // If login is successful, call Auth.login to store the token in localStorage
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);  // Log any errors that occur during login
    }
  };

  return (
    <section className = "container-fluid">
      <div className ="row text-center" id="title">
        <h1 className = "col mt-5 mb-4"> Sign Up </h1>
      </div>

      <div className ="d-flex justify-content-center mt-2" id="signUpForm">
        <div className ="col-md-4 p-3 text-center border border-3 border-dark rounded-5">
            <form onSubmit={handleSubmit}>
                <h3 className ="mt-1">username</h3>
                <input 
                className = "form-input" 
                name = 'username'
                type = "text" 
                placeholder = "Enter your username"
                value={loginData.username || ''}
                onChange={handleChange}
                aria-label="Username" />

                <h3 className ="mt-1">Password</h3>
                <input 
                className = "form-input" 
                type ='password'
                placeholder = "Enter your password" 
                name = 'password'
                value = {loginData.password || ''}
                onChange = {handleChange}
                aria-label = "Password" />
                <button className = "btn btn-primary mt-4" type = "submit">LogIn</button>
            </form>
        </div>
      </div>
    </section>
  )
};

export default Login;
