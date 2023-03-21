import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import '@fontsource/ibm-plex-sans'

import { theme } from './utils/theme'
import './styles/app.css'

// components imports
import Navbar from './components/Navbar'
import Home from './components/Home'

function App () {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='*' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
