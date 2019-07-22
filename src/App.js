import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';

const sourceData = [
  {
    id: 1,
    name: 'Item 1',
    items: [
      {
        id: 2,
        name: 'Item 1.1',
        items: [
          {
            id: 3,
            name: 'Item 1.1.1',
            items: []
          },
          {
            id: 4,
            name: 'Item 1.1.2',
            items: [
              {
                id: 5,
                name: 'Item 1.1.2.1',
                items: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: 'Item 1.2',
        items: []
      }
    ]
  },
  {
    id: 7,
    name: 'Item 2',
    items: []
  },
  {
    id: 8,
    name: 'Item 3',
    items: [
      {
        id: 9,
        name: 'Item 3.1',
        items: []
      }
    ]
  }
];

function App() {
  return <ItemList items={sourceData} />;
}

export default App;
