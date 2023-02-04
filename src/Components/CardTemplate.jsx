import React from 'react'
import { Box, Stack, Card, CardContent, Typography, styled } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CardTemplate(props) {
    const { date, name, leaveTyp, statusIco } = props
    const StyledCard = styled(Card)({
        height: '95%',
        width: '95%'
    })
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <StyledCard>
                    <CardContent>
                        <Stack direction='column' spacing={6} >
                            <Stack direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography component='body2' variant='body2' display='flex' justifyContent='center' alignItems='center' color="text.secondary" gutterBottom><CalendarMonthIcon sx={{ color: '#c5c6ca', marginRight:'5px' }} fontSize='small'/>{date}</Typography>
                                {statusIco}
                            </Stack>
                            <Stack direction='column' display='flex' alignItems='flex-start'>
                                <Typography component='body1' variant='body1' fontWeight='bold'>{name}</Typography>
                                <Typography component='body2' variant='body2' color="#259ff4" fontWeight='bold'><small>{leaveTyp}</small></Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </StyledCard>
            </Box>
        </>
    )
}
