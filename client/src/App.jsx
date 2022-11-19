import React from 'react';
import './styles.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { CustomList } from './Components/CustomList';
import { blueGrey } from '@mui/material/colors';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: blueGrey[900],
        color: '#FFFFFF',
      }}>
      <AppBar
        position='relative'
        style={{
          backgroundColor: blueGrey[800],
          color: '#FFFFFF',
        }}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            My List Of Stuff
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomList />
    </div>
  );
}
