import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <header className = 'position-fixed top-0 start-0 w-100'>
        <Navbar />
      </header>
      
      <body>
        <main className = "d-flex flex-column min-vh-100">
          <Outlet />
        </main>

        <footer className = "mt-auto text-center">
          <p>&copy; TripPlanner created by AdminChatter, Phy, Moe, Ricardo</p>
        </footer>
      </body>

    </div>
  )
}

export default App
