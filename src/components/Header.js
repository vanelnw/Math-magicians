import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <strong>Math Magicians</strong>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </div>
);

export default Header;
