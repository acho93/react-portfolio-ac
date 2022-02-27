import React, { useState } from 'react';
import Navigation from '../Navigation';
import Simple from '../Navigation/test';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  return (
    <div>
      {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Simple/>
    </div>
  );
}

export default Header;
