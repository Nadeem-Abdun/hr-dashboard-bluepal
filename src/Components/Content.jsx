import React from 'react'
import { Box, Stack, Typography, Button, Grid } from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress';
import MainPanel from './MainPanel'
import PieChart from './PieChart.jpg'


export default function Content() {
    return (
        <>
            <Box height='90%' width='100%'>
                <Stack direction='row' height='100%' width='100%'>
                    {/* SidePanel */}
                    <Box height='100%' width='27%' display='flex' justifyContent='center' alignItems='center' bgcolor='#fafafa'>
                        <Box height='75%' width='75%' >
                            <Stack direction='column' height='100%' width='100%'>
                                {/* Title */}
                                <Box mb={2.5}>
                                    <Typography component='h1' variant='h4'><strong>Welcome back to your Dashboard Alex</strong></Typography>
                                </Box>
                                {/* SubTitle */}
                                <Box mb={2.5} marginTop={2}>
                                    <Typography component='h3' variant='body2'><small>We recommended you complete <b><u>Certificates of Employment</u></b> and upload <b><u>New Registration</u></b> to system from last week.</small></Typography>
                                </Box>
                                {/* Infographics */}
                                <Box mb={3} marginTop={3}>
                                    <Stack direction='row' >
                                        <Grid container justifyContent='center' alignItems='center'>
                                            <Grid Item xs={12} sm={12} md={12} lg={12}>
                                                <Typography component='h1' variant='h6' display='flex' justifyContent='center'>Tasks to do</Typography>
                                            </Grid>
                                            {/* Progress Pie Chart */}
                                            <Grid Item xs={12} sm={12} md={12} lg={12}>
                                                {/* Image Chart */}
                                                <Box display='flex' justifyContent='center' alignItems='center'>
                                                    <Box component="img" height='115px' alt="PieChart" src={PieChart} />
                                                </Box>
                                                {/* Progress Chart-Not Working*/}
                                                {/* <Box display='flex' justifyContent='center' alignItems='center'>
                                                    <CircularProgress color='error' size='lg' thickness={10} variant='determinate' value={50}>
                                                        2 / 3
                                                    </CircularProgress>
                                                </Box> */}
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent='center' alignItems='center'>
                                            <Grid Item xs={12} sm={12} md={12} lg={12}>
                                                <Typography component='h1' variant='h6' display='flex' justifyContent='center'>Cases</Typography>
                                            </Grid>
                                            <Grid Item xs={5} sm={5} md={5} lg={5}>
                                                <Typography component='h1' variant='h5' display='flex' justifyContent='flex-end'>12</Typography>
                                            </Grid>
                                            <Grid Item xs={1} sm={1} md={1} lg={1}>
                                                {/* EmptyGrid */}
                                            </Grid>
                                            <Grid Item xs={6} sm={6} md={6} lg={6}>
                                                <Typography component='h1' variant='body2' fontSize='small' display='flex' justifyContent='flex-start'>Open Documents</Typography>
                                            </Grid>
                                            <Grid Item xs={5} sm={5} md={5} lg={5}>
                                                <Typography component='h1' variant='h5' display='flex' justifyContent='flex-end'>3</Typography>
                                            </Grid>
                                            <Grid Item xs={1} sm={1} md={1} lg={1}>
                                                {/* EmptyGrid */}
                                            </Grid>
                                            <Grid Item xs={6} sm={6} md={6} lg={6}>
                                                <Typography component='h1' variant='body2' fontSize='small' display='flex' justifyContent='flex-start'>New Tickets</Typography>
                                            </Grid>
                                            <Grid Item xs={5} sm={5} md={5} lg={5}>
                                                <Typography component='h1' variant='h5' display='flex' justifyContent='flex-end'>3</Typography>
                                            </Grid>
                                            <Grid Item xs={1} sm={1} md={1} lg={1}>
                                                {/* EmptyGrid */}
                                            </Grid>
                                            <Grid Item xs={6} sm={6} md={6} lg={6}>
                                                <Typography component='h1' variant='body2' fontSize='small' display='flex' justifyContent='flex-start'>New Employees</Typography>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </Box>
                                {/* Button */}
                                <Box display='flex' justifyContent='center' alignItems='center' marginTop={1.5} >
                                    <Button variant='contained' sx={{ bgcolor: '#fafafa', color: 'black' }} fontWeight='bold'>See Full Reports</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    {/* MainPanel */}
                    <Box height='100%' width='73%' bgcolor='#f1f1f3'>
                        <MainPanel />
                    </Box>
                </Stack >
            </Box >
        </>
    )
}




