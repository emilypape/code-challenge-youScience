// The following links may provide some assistance
// https://material-ui.com/components/text-fields/#api
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import React, { useEffect, useState } from 'react';
import '../../assets/styles/index.css';
import { Checkbox, Drawer, FormControlLabel, FormLabel, Radio, RadioGroup, FormControl } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingPage from '../LoadingPage/LoadingPage';

export function ListItemDrawer({ drawerOpen, setDrawerOpen, selectedItem, listItems, setListItems }) {
  // create a state variable to hold the status value
  const [name, setName] = useState('');
  const [viewed, setViewed] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // when the radio has an event change the state to the value of that radio button
  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const updateStatus = (event) => {
    if (selectedItem.status === 'Complete') return;

    setStatus(event.target.value);
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateViewed = () => {
    setViewed(!viewed);
  };

  const handleDone = () => {
    setLoading(true);
    // Make request to backend to update item if changed
    // Once backend responds with an ok, we change state and close drawer
    // TODO: Replace set timout with a call to an API
    setTimeout(() => {
      setListItems(
        listItems.map((item) => {
          if (item.id === selectedItem.id) {
            return {
              id: selectedItem.id,
              name,
              viewed,
              description,
              status,
            };
          }
          return item;
        }),
      );
      setDrawerOpen(false);
      setLoading(false);
    }, 1000);
  };

  // update state variables when selectedItem changes
  useEffect(() => {
    setName(selectedItem.name);
    setViewed(selectedItem.viewed);
    setDescription(selectedItem.description);
    setStatus(selectedItem.status);
  }, [selectedItem]);

  return (
    <Drawer
      // change drawer styles
      // set on close to change the state of the drawer
      PaperProps={{
        sx: { width: '50%', bgcolor: blueGrey[900], color: '#FFFFFF' },
      }}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      anchor='right'
      // variant='persistent'
    >
      {/* display the dynamic item information and description */}
      <div className='drawer-header'>
        <div>{name}</div>
        <div className='drawer-description'>{description}</div>
      </div>
      {/* create a form that holds the inputs for updating the item data */}
      <Box
        sx={{
          input: { color: 'white' },
          textArea: { color: 'white' },
          label: { color: 'white' },
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
        }}>
        <div> Item Name</div>
        <TextField
          inputProps={{ maxLength: 32 }}
          value={name}
          onChange={updateName}
          sx={{ width: '100%' }}
          id='standard-basic'
          variant='standard'
        />
        <FormControl sx={{ marginBottom: 2 }}>
          <FormLabel sx={{ width: '100%', marginTop: 2 }} id='demo-row-radio-buttons-group-label'>
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            value={status}
            onChange={updateStatus}>
            <FormControlLabel
              value='New'
              control={<Radio disabled={selectedItem.status === 'Complete'} />}
              label='New'
            />
            <FormControlLabel
              value='In Progress'
              control={<Radio disabled={selectedItem.status === 'Complete'} />}
              label='In Progress'
            />
            <FormControlLabel value='Complete' control={<Radio />} label='Complete' />
            <FormControlLabel
              value='Archived'
              control={<Radio disabled={selectedItem.status === 'Complete'} />}
              label='Archived'
            />
          </RadioGroup>
        </FormControl>
        <div>Item Description</div>
        <TextField
          sx={{ width: '100%', marginTop: 0.5 }}
          id='outlined-multiline-static'
          inputProps={{ maxLength: 100 }}
          multiline
          rows={4}
          value={description}
          onChange={updateDescription}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Checkbox checked={viewed} onChange={updateViewed} />
          <div>Viewed</div>
        </Box>
      </Box>
      {/* create a button to close the drawer from the inside */}
      <div
        style={{
          boxShadow: 'none',
          borderRadius: '0px',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {loading ? (
          <LoadingPage />
        ) : (
          <Button
            onClick={handleDone}
            variant='contained'
            style={{
              width: '100%',
            }}>
            Done
          </Button>
        )}
      </div>
    </Drawer>
  );
}
