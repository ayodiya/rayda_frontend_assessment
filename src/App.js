import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes, Navigate } from 'react-router-dom'
import '@fontsource/ibm-plex-sans'

import Navbar from './components/Navbar'
import { theme } from './utils/theme'
import './styles/app.css'

function App () {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Routes>
              <Route exact path='/' element={<AdminHome />} />
            </Routes> */}
      </ThemeProvider>
    </>
  )
}

export default App
