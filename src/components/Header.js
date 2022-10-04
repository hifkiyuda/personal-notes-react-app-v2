import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <p className='header-home'>
        <Link to='/'>Personal Notes</Link>
      </p>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to='/create-note'>Create</Link>
          </li>
          <li>
            <Link to='/archived-notes'>Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;