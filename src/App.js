import { Box, Typography } from '@mui/material'
import Appbars from './Components/Appbars';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Box height='100vh' width='100vw' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Appbars />
        <Content />
      </Box>
      <Box height='100vh' width='100vw' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Typography component='h2' variant='h2'>🚧⚠️This App is not optimized for mobile view, Please switch to a desktop view.⚠️🚧</Typography>
      </Box>
    </>
  );
}

export default App;
