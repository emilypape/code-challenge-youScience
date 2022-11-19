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

export function CustomList() {
  // Default drawer state to closed
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // Pull default item state up from ListITemDrawer
  const [selectedItem, setSelectedItem] = useState({
    name: '',
    viewed: 'false',
    description: '',
    status: false,
  });
  // Default to an empty list for conditional rendering
  const [listItems, setListItems] = useState([]);

  // TODO: replace with a fetch to backend
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

  // Be sure to indicate a "loading" state to the UI
  if (!listItems.length) return <LoadingPage />; // TODO: Replace with a loading component

  return (
    <div>
      <List>
        {listItems.map((item, i) => (
          // use material ui list component for our generated list
          <Grid item xs={12} md={6}>
            <List>
              <Box>
                <ListItem>
                  <ListItemText primary={item.name} onClick={() => handleItemClick(item)} key={`${item.name}-${i}`} />
                  <ListItemAvatar>
                    <Avatar>
                      <IconButton aria-label='delete'>
                        {/* come back and add delete functionality to the trash can */}
                        <DeleteIcon />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              </Box>
            </List>
          </Grid>
        ))}
      </List>
      <ListItemDrawer selectedItem={selectedItem} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
