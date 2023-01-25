import React, { useState } from 'react'
import { Box, Stack, Button, Typography, Tab, styled, IconButton } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CardsRack from './CardsRack';

export default function MainPanel() {
    const [value, setValue] = useState('1')
    const handleOnChange = (event, newValue) => {
        setValue(newValue);
    }
    const StyledTab = styled(Tab)({
        textTransform: 'capitalize',
        fontSize: '15px',
        width: '10px'
    })
    return (
        <>
            <Box width='85%' marginLeft='10%' marginRight='5%' height='90%' marginTop='3%' marginBottom='7%'>
                <Stack direction='column' height='100%' width='100%'>
                    <Box display='flex' justifyContent='flex-end' height='8%' width='100%'>
                        <Button variant='contained' size='large' sx={{ paddingX: '50px', bgcolor: '#259ff4' }}><Typography component='h6' variant='body2' fontWeight={1} textTransform='capitalize'>Start new case</Typography></Button>
                    </Box>
                    <Box display='flex' justifyContent='flex-start' height='9%' width='100%'>
                        <TabContext value={value}>
                            <TabList onChange={handleOnChange} textColor='primary' indicatorColor='primary' orientation='horizontal'>
                                <StyledTab label='Documents' value={'1'}></StyledTab>
                                <StyledTab label='People' value={'2'}></StyledTab>
                                <StyledTab label='Tickets' value={'3'}></StyledTab>
                            </TabList>
                            <TabPanel value={'1'}></TabPanel>
                        </TabContext>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='flex-end' height='8%' width='100%' marginTop={3}>
                        <Stack direction='column' spacing={0.1}>
                            <Typography component='body2' variant='body2' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Box mr={1}><FolderOpenOutlinedIcon fontSize='small' /></Box><small>8/12</small>
                            </Typography>
                            <Typography component='body2' variant='body2'><small>OPEN DOCUMENTS</small></Typography>
                        </Stack>
                        <Typography component='body2' variant='body2' display='flex' justifyContent='flex-start' alignItems='center'>
                            All Documents<KeyboardArrowDownIcon fontSize='small' />
                        </Typography>
                    </Box>
                    <Box height='67%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <CardsRack />
                    </Box>
                    <Box height='8%' width='100%' display='flex' justifyContent='space-between' alignItems='center' marginTop={3}>
                        <Stack direction='row' spacing={1.5}>
                            <Button variant='text' sx={{ paddingX: '35px', bgcolor: '#f1f1f3', color: 'grey' }}>
                                <Typography component='h6' variant='body2' fontWeight='bold' textTransform='capitalize' display='flex' justifyContent='space-between' alignItems='center'><WestOutlinedIcon/>Previous</Typography>
                            </Button>
                            <Button variant='contained' sx={{ paddingX: '50px', bgcolor: '#259ff4' }}>
                                <Typography component='h6' variant='body2' fontWeight='bold' display='flex' justifyContent='space-between' alignItems='center'>Next<EastOutlinedIcon/></Typography>
                            </Button>
                        </Stack>
                        <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>
                            <Typography component='body1' variant='body1'>
                                <IconButton aria-label="previous" size="small">
                                    <ChevronLeftOutlinedIcon fontSize="inherit" />
                                </IconButton>
                                Previous
                            </Typography>
                            <Typography component='body1' variant='body1'>
                                Next
                                <IconButton aria-label="previous" size="small">
                                    <ChevronRightOutlinedIcon fontSize="inherit" />
                                </IconButton>
                            </Typography>
                            <Typography component='body1' variant='body1'>
                                <Button variant='contained' size='small' sx={{ bgcolor: '#f1f1f3', color: 'grey', mx:'5px' }} >ENTER</Button>Confirm
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
