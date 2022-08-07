import React, { useState } from 'react';
import DropdownList from './dropdown-list/dropdown-list';

function Dropdown() {
  const items= [
    'Profile Information', 
    'Change Password', 
    'Become PRO',
    'Help',
    'LogOut'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);

  return (
    <div className={isOpen ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
      <button className='btn' onClick={toggle}>Account Settings</button>
      <DropdownList items={items} />
    </div>
  );
}

export default Dropdown;