import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar border-b mb-8'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost normal-case text-xl'
        >
          LyricFinder
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to='/login'>Page 1</NavLink>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2 bg-base-100'>
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
