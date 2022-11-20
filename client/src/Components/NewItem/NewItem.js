import React, { useEffect, useState } from 'react';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';

export default function NewItem({}) {
  return (
    <div>
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
        variant='contained'>
        <div>New Item</div>
      </Button>
    </div>
  );
}
