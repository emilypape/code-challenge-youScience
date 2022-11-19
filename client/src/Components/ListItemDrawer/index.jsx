// The following links may provide some assistance
// https://material-ui.com/components/text-fields/#api
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import React from 'react';
import '../../assets/styles/index.css';
import { Checkbox, Drawer, FormControlLabel, FormLabel, Input, Radio, RadioGroup, FormControl } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { bgcolor, color, margin } from '@mui/system';
import Button from '@mui/material/Button';

export function ListItemDrawer({ drawerOpen, setDrawerOpen, selectedItem }) {
  const defaultState = {
    name: '',
    viewed: 'false',
    description: '',
    status: false,
  };

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Drawer
      PaperProps={{
        sx: { width: '50%', bgcolor: blueGrey[900], color: '#FFFFFF' },
      }}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      anchor='right'
      // variant='persistent'
    >
      <div className='drawer-header'>
        <div>{selectedItem.name}</div>
        <div className='drawer-description'>{selectedItem.description}</div>
      </div>
      <Box sx={{ input: { color: 'white' }, marginTop: 2, marginLeft: 2, marginRight: 2 }}>
        <div> Item Name</div>
        <TextField sx={{ width: '100%' }} id='standard-basic' variant='standard' />
        <FormControl sx={{ marginBottom: 2 }}>
          <FormLabel sx={{ color: 'white', width: '100%', marginTop: 2 }} id='demo-row-radio-buttons-group-label'>
            Status
          </FormLabel>
          <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
            <FormControlLabel value='New' control={<Radio />} label='New' />
            <FormControlLabel value='Complete' control={<Radio />} label='Complete' />
            <FormControlLabel value='In Progress' control={<Radio />} label='In Progress' />
          </RadioGroup>
        </FormControl>
        <div>Item Description</div>
        <TextField
          sx={{ input: { color: 'white' }, width: '100%', marginTop: 0.5 }}
          id='outlined-multiline-static'
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Checkbox value={false} />
          <div>Viewed</div>
        </Box>
      </Box>
      <Button
        onClick={() => setDrawerOpen(false)}
        style={{
          boxShadow: 'none',
          borderRadius: '0px',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
        variant='contained'>
        Close
      </Button>
    </Drawer>
  );
}
