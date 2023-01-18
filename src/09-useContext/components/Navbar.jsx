import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          useContext
        </Link>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <NavLink className={setActive} to='/'>
              Home
            </NavLink>
            <NavLink className={setActive} to='/about'>
              About
            </NavLink>
            <NavLink className={setActive} to='/login'>
              Login
            </NavLink>
            <NavLink className={setActive} to='/cart'>
              Cart
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );

  function setActive({ isActive }) {
    let classes = 'nav-link';
    if (isActive) {
      classes += ' active';
    }
    return classes;
  }
};
