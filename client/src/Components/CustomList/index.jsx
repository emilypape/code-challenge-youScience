import React from 'react';
import { List, ListItem } from '@mui/material';
import { ListItemDrawer } from '../ListItemDrawer';

export function CustomList() {
  const mockData = [
    {
      name: 'Example Item 1',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'new',
    },
    {
      name: 'Example Item 2',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'new',
    },
    {
      name: 'Example Item 3',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'new',
    },
    {
      name: 'Example Item 4',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'new',
    },
    {
      name: 'Example Item 5',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'new',
    },
  ];

  return (
    <div>
      <List>
        {mockData.map((item, i) => (
          <ListItem key={`${item.name}-${i}`}>{item.name}</ListItem>
        ))}
      </List>
      <ListItemDrawer />
    </div>
  );
}
