import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './dropdown-item/dropdown-item';

function DropdownList(props) {
  const { items } = props;
  const [activeItem, setActiveItem] = useState('');
  return (
    <ul className='dropdown'>
      {items.map(item => (
        <DropdownItem 
          item={item} 
          isActive={item === activeItem} 
          onItemClick={(i) => setActiveItem(i)} 
          key={items.indexOf(item)} 
        />
      ))}
    </ul>
  );
}

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DropdownList;