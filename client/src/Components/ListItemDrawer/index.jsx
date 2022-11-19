// The following links may provide some assistance
// https://material-ui.com/components/text-fields/#api
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import React from 'react';
import '../../assets/styles/index.css';
import { Checkbox, Drawer, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export function ListItemDrawer({ drawerOpen, setDrawerOpen, selectedItem }) {
  const defaultState = {
    name: '',
    viewed: 'false',
    description: '',
    status: false,
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
      </div>
      {/* <Input name='name' value='' onChange={() => {}} />
      <label>Description</label>
      <input name='somethingElse' value={defaultState.name} type='text' onChange={() => {}} />
      <FormLabel>This is a label</FormLabel>
      <Checkbox value={false} />
      <RadioGroup name='status' value={defaultState.status}>
        <FormControlLabel value='' label='option' control={<Radio />} />
        <label>
          {' '}
          this is a label
          <Radio />
        </label>
        <Radio checked onChange={() => {}} value='a' name='radio-button-demo' />
      </RadioGroup> */}
    </Drawer>
  );
}
