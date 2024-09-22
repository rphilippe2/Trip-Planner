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
          <div className = "navbar-brand">
            <Link to='/home'>Trip Planner</Link>
          </div>
          <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse"
              data-bs-target = "#navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id="navbarSupportedContent">
              <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                  <li className = "nav-item">
                      <div className = "nav-link active" aria-current="page">
                          <Link to='/home'>Home</Link>
                      </div>
                  </li>
                  <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./trips.html">Your Trips</a>
                  </li>
                  <li className = "nav-item dropdown">
                      <a className = "nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Search
                      </a>
                      <ul className = "dropdown-menu">
                          <li>
                            <div className = "dropdown-item">
                              <Link to='/search'>Parks/Trail</Link>
                            </div>
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
                // Conditional rendering based on loginCheck state
                !loginCheck ? (
                  <>
                    {/* Render sign up button if user is not logged in */}
                    <button className="btn" type='button'>
                      <Link to='/signup'>Sign Up</Link>
                    </button>
                    {' '}
                    {/* Render login button if user is not logged in */}
                    <button className="btn" type='button'>
                      <Link to='/login'>Login</Link>
                    </button>
                  </>
                ) : (
                  // Render logout button if user is logged in
                  <img 
                  src="https://avatars.githubusercontent.com/u/89085111?v=4" 
                  alt="User" 
                  className="rounded-circle" 
                  style={{ width: '40px', height: '40px' }}></img>
                  <button className="btn" type='button' onClick={() => {
                    auth.logout();  // Call logout() method from auth utility on button click
                  }}>Logout</button>
                )
              </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
