import React from 'react'
import { Box, Stack, styled } from '@mui/material'
import CardTemplate from './CardTemplate'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';

export default function CardsRack() {
    const SelectBox = styled(Box)({
        // boxShadow: '2px 2px 2px 2px #259ff4',
        border: '2px solid #259ff4',
    })
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack direction='column' height='100%' width='100%' spacing={1} justifyContent='center' alignItems='center'>
                    <Stack direction='row' height='47%' width='98%' spacing={1} justifyContent='center' alignItems='center'>
                        <SelectBox height='95%' width='95%' display='flex' justifyContent='center' alignItems='center'>
                            <CardTemplate date='08-04-2019' name='Mark Thompson' leaveTyp='Holiday request' statusIco={<CloudDownloadOutlinedIcon color='primary' />} />
                        </SelectBox>
                        <CardTemplate date='07-03-2019' name='Tillie Carlson' leaveTyp='Certificate of employment' statusIco={<CheckCircleIcon sx={{ color: '#78c323' }} />} />
                        <CardTemplate date='04-17-2019' name='Corey Gross' leaveTyp='Half-time application' statusIco={<HourglassEmptyOutlinedIcon color='primary' />} />
                        <CardTemplate date='07-07-2019' name='Harriett McGuire' leaveTyp='Holiday request' statusIco={<CloudDownloadOutlinedIcon color='primary' />} />
                    </Stack>
                    <Stack direction='row' height='47%' width='98%' spacing={1} justifyContent='center' alignItems='center'>
                        <CardTemplate date='04-18-2019' name='Larry Christensen' leaveTyp='Sick Leave' statusIco='' />
                        <CardTemplate date='04-25-2019' name='Elnora Poole' leaveTyp='Certificate of employment' statusIco={<CheckCircleIcon sx={{ color: '#78c323' }} />} />
                        <CardTemplate date='03-11-2019' name='Sally Rhodes' leaveTyp='Holiday request' statusIco={<CheckCircleIcon sx={{ color: '#78c323' }} />} />
                        <CardTemplate date='02-25-2019' name='Phillip Ryan' leaveTyp='New Born' statusIco={<CheckCircleIcon sx={{ color: '#78c323' }} />} />
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
