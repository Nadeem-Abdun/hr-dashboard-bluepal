import React, { useState } from 'react'
import { AppBar, Box, Stack, Button, Menu, MenuItem, Avatar, styled, InputBase, Badge } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';

export default function Appbars() {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
  };
  const Searchbar = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  })
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
            <Box display='flex' justifyContent='center' flex={0.4} >

            </Box>
            {/* SearchBar */}
            <Box display='flex' justifyContent='center' flex={3} >
              <Searchbar><SearchIcon color='info' /><InputBase fontSize='small' placeholder='Search for any Document or Employee..' fullWidth /></Searchbar>
            </Box>
            <Box display='flex' justifyContent='center' flex={4.5} >

            </Box>
            {/* Notification Icons */}
            <Box display='flex' justifyContent='center' flex={1.5}>
              <Stack direction='row' spacing={2}>
                <IconButton><Badge color="primary"><ForumIcon color="action" /></Badge></IconButton>
                <IconButton><Badge badgeContent={4} color="primary"><NotificationsIcon color="action" /></Badge></IconButton>
                <IconButton><Badge badgeContent={3} color="primary"><InboxIcon color="action" /></Badge></IconButton>
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
