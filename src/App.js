import { Box, Typography } from '@mui/material'
import Appbars from './Components/Appbars';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Box display='block' height='100vh' width='100vw'>
        <Box height='100%' width='100%' sx={{ display: { sm: 'none', md: 'block' } }}>
          <Appbars />
          <Content />
        </Box>
        <Box height='100%' width='100%' sx={{ display: { sm: 'block', md: 'none' } }}>
          <Typography component='h2' variant='h2'>🚧⚠️This App is not optimized for mobile view, Please switch to a desktop view.⚠️🚧</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
