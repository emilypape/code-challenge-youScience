import * as React from 'react';
// import loader from material ui
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingPage() {
  return (
    <>
      {/* add material ui loader at the top of the screen with a timeout of 2 seconds */}
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </>
  );
}
