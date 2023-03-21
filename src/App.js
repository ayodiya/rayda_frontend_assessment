import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './utils/theme'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box>
          Setup
        </Box>
       </ThemeProvider>
    </>
  );
}

export default App;
