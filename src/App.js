import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import "@fontsource/ibm-plex-sans";

import { theme } from './utils/theme'
import './styles/app.css'

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
