import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem(props) {
  const { item, isActive } = props;
  return (
    <li className={isActive ? 'active' : null} onClick={() => props.onItemClick(item)}>
      <a href='#'>{item}</a>
    </li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func.isRequired
};

export default DropdownItem;