import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true); 
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

  return (
    <nav className = "navbar navbar-expand-lg bg-body-tertiary" id = "main-nav">
      <div className = "container-fluid">
          
          <Link className = "navbar-brand" to=''>Trip Planner</Link>
          <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse"
              data-bs-target = "#navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id="navbarSupportedContent">
              <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                  <li className = "nav-item">
                    <Link className = "nav-link active" aria-current="page" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/trips'>Your Trips</Link>
                  </li>
                  <li className = "nav-item dropdown">
                      <a className = "nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Search
                      </a>
                      <ul className = "dropdown-menu">
                          <li>
                              <Link className = "dropdown-item" to='/search'>Parks/Trail</Link>
                          </li>
                          <li>
                              <div className = "dropdown-divider"></div>
                          </li>
                          <li><a className = "dropdown-item" href="#">In Develop</a></li>
                      </ul>
                  </li>
                  <li className = "nav-item dropdown">
                      <a className = "nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Contributor(Github)
                      </a>
                      <ul className = "dropdown-menu">
                          <li><a className = "dropdown-item" href="https://github.com/AdminChatter">Jason</a></li>
                          <li><a className = "dropdown-item" href="https://github.com/PHYPHAM1">Phy</a></li>
                          <li><a className = "dropdown-item" href="https://github.com/moayed10111">Moe</a></li>
                          <li><a className = "dropdown-item" href="https://github.com/rphilippe2">Ricado</a></li>
                          <li>
                              <div className = "dropdown-divider"></div>
                          </li>
                          <li><a className = "dropdown-item" href="#">In Develop</a></li>
                      </ul>
                  </li>
              </ul>
              <form className = "d-flex" role="Login">
                {!loginCheck ? 
                  <>
                    <Link className="btn btn-outline-success" type='button' to='/signup'>Sign Up</Link>
                    <Link className="btn btn-outline-success" to='/login'>Login</Link>
                  </>
                  : 
                  <>
                  <img 
                  src="https://avatars.githubusercontent.com/u/89085111?v=4" 
                  alt="User" 
                  className="rounded-circle" 
                  style={{ width: '40px', height: '40px' }}></img>
                  <button className="btn btn-outline-success" type='button' onClick={() => {
                    auth.logout();  // Call logout() method from auth utility on button click
                  }}>Logout</button>
                  </>
              }
              </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
