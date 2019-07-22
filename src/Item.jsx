import React from 'react';
import ItemList from './ItemList';

const Item = ({ name, items }) => (
  <li>
    {name}
    {items && <ItemList items={items} />}
  </li>
);

export default Item;
