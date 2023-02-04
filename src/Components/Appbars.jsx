import React, { useState } from 'react'
import { AppBar, Box, Stack, Button, Menu, MenuItem, Avatar, styled, Badge, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Appbars() {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
  };
  const StyledAppBar = styled(AppBar)({
    background: "#ffffff",
    height: '100%',
  })
  return (
    <>
      <Box height='10%' width='100%'>
        <StyledAppBar position="static">
          <Stack direction='row' spacing={1} height='100%' display='flex' justifyContent='space-between' alignItems='center'>
            {/* MenuButton */}
            <Box bgcolor='#259ff4' display='flex' justifyContent='center' height='100%' flex={0.6}>
              <IconButton color="inherit" aria-label="menu" ><MenuIcon fontSize='medium' /></IconButton>
            </Box>
            <Box display='flex' justifyContent='center' flex={0.1} >
              {/* Empty Box */}
            </Box>
            {/* SearchBar */}
            <Box display='flex' justifyContent='center' flex={4} >
              <Stack width='100%' direction='row' justifyContent='center' alignItems='center'>
                <SearchIcon fontSize='small' sx={{ color: '#c5c6ca', marginRight: '6px' }} />
                <Typography component='body2' variant='body2' sx={{ fontSize: '13px', color:'#aaafba' }}>Search for any Document or</Typography>
                <Typography component='body2' variant='body2' marginLeft={0.5} fontWeight='bold' sx={{ fontSize: '13px', color:'#3c99db' }}>Employee&#40;Wayne Enterprise&#41;</Typography>
                <ErrorOutlineIcon fontSize='small' sx={{ color: '#c5c6ca', marginLeft: '6px' }} />
              </Stack>
            </Box>
            <Box display='flex' justifyContent='center' flex={4.5} >

            </Box>
            {/* Notification Icons */}
            <Box display='flex' justifyContent='center' flex={1.5}>
              <Stack direction='row' spacing={2}>
                <IconButton><Badge color="primary"><ForumIcon sx={{ color: '#c5c6ca' }} /></Badge></IconButton>
                <IconButton><Badge badgeContent={4} color="primary"><NotificationsIcon sx={{ color: '#c5c6ca' }} /></Badge></IconButton>
                <IconButton><Badge badgeContent={3} color="primary"><InboxIcon sx={{ color: '#c5c6ca' }} /></Badge></IconButton>
              </Stack>
            </Box>
            {/* Profile */}
            <Box display='flex' justifyContent='center' flex={2} color='#000000'>
              <Stack direction='row' spacing={0} height='100%'>
                <Button variant="text" color='inherit' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>HI, ALEX</Button>
                <Menu anchorOrigin={{ vertical: 'top', horizontal: 'right', }} transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={open} onClose={(handleClose)} >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleClose}>LogOut!</MenuItem>
                </Menu>
                <Avatar alt="Alex Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              </Stack>
            </Box>
          </Stack>
        </StyledAppBar>
      </Box>
    </>
  )
}
