import React, { useEffect, useState } from 'react';
import { List, ListItem } from '@mui/material';
import { ListItemDrawer } from '../ListItemDrawer';
import { bgcolor, Box } from '@mui/system';
import LoadingPage from '../LoadingPage/LoadingPage.jsx';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';

export function CustomList() {
  // Default drawer state to closed
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // Pull default item state up from ListITemDrawer
  const [selectedItem, setSelectedItem] = useState({
    id: null,
    name: '',
    viewed: false,
    description: '',
    status: '',
  });
  // Default to an empty list for conditional rendering
  const [listItems, setListItems] = useState([]);

  // TODO: replace with a fetch to backend
  const mockData = [
    {
      id: 1,
      name: 'Example Item 1',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'New',
    },
    {
      id: 2,
      name: 'Example Item 2',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'New',
    },
    {
      id: 3,
      name: 'Example Item 3',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'New',
    },
    {
      id: 4,
      name: 'Example Item 4',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'New',
    },
    {
      id: 5,
      name: 'Example Item 5',
      viewed: false,
      description: 'This is an example item for frontend development',
      status: 'New',
    },
  ];

  useEffect(() => {
    // Create a function that mocks an asynchronous get request.
    // This should resolve 2 seconds after the page is initially loaded and return your mock data set.
    // TODO: replace with a fetch to backend
    async function replaceMeWithAFetchLater() {
      setTimeout(() => {
        setListItems(mockData);
      }, 2000);
    }

    replaceMeWithAFetchLater();
  }, []);

  // Set the selected item in state and open the drawer to show the item details when list item is clicked on
  function handleItemClick(item) {
    setSelectedItem(item);
    setDrawerOpen(true);
  }

  function handleItemDelete(itemId) {
    // TODO: Make an api request to delete item from database
    // upon a succesful response from our server indicating that an item has been deleted
    // delete the item from state
    setListItems(listItems.filter((item) => item.id !== itemId));
  }

  function handleItemCreate() {
    // TODO: Make an api request to create a new item with default values
    // this will allow us to easily create an id for the items and remove bloated logic here in the front end
    const newDefaultItem = {
      // Check for biggest id and add one to avoid id collisions
      id: Math.max(...listItems.map((item) => item.id)) + 1,
      name: 'New Item',
      description: 'Describe Me',
      status: 'New',
      viewed: false,
    };

    // update state to include all old items and new default item
    setListItems([...listItems, newDefaultItem]);
    handleItemClick(newDefaultItem);
  }

  // Be sure to indicate a "loading" state to the UI
  if (!listItems.length) return <LoadingPage />;

  return (
    <div>
      <List>
        {listItems.map((item, i) => (
          // use material ui list component for our generated list
          <ListItem key={`${item.name}-${i}`}>
            <ListItemText primary={item.name} onClick={() => handleItemClick(item)} />
            <ListItemAvatar>
              <Avatar>
                <IconButton aria-label='delete' onClick={() => handleItemDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
      <ListItemDrawer
        selectedItem={selectedItem}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        listItems={listItems}
        setListItems={setListItems}
      />
      <Button
        style={{
          boxShadow: 'none',
          borderRadius: '0px',
          position: 'absolute',
          bottom: 20,
          width: '10%',
          background: green[500],
          borderRadius: '.5em',
        }}
        variant='contained'
        onClick={handleItemCreate}>
        New Item
      </Button>
    </div>
  );
}
