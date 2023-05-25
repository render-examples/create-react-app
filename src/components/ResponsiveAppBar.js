import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { Stack } from '@mui/material';

export default function ResponsiveAppBar() {
  return (
    <AppBar position='static' sx={{marginBottom: 3}}>
      <Toolbar>
        {/* <IconButton></IconButton> */}
        <Typography 
      variant='h6'
      href="/"
      component='a'
      sx = {{ flexGrow: 1, color: 'inherit',
      textDecoration: 'none'}}
      > PIERAO
      </Typography>
      <Stack direction='row' spacing={1}>
        
      </Stack>
      </Toolbar>
      
    </AppBar>
  );
}