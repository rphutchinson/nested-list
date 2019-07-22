import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => (
  <ul>
    {items.map(({ id, name, items }) => <Item id={id} name={name} items={items} />)}
  </ul>
)

export default ItemList;