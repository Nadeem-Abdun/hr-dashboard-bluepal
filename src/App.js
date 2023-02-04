import { Box } from '@mui/material'
import Appbars from './Components/Appbars';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Box height='100vh' width='100vw' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Appbars />
        <Content />
      </Box>
      <Box height='768px' width='1366px' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Appbars />
        <Content />
      </Box>
    </>
  );
}

export default App;
