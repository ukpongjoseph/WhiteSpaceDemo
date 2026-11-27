import './App.css'
import { Box, CssBaseline } from '@mui/material'
import Nav from './components/Nav'
import { navLinks } from './data'
import { commonStyleProperties } from './styles'


function App() {

  return (
    <>
      <Box component="div" sx={{
        display : "flex",
        flexDirection : "column",
        gap : 2,
        maxWidth : "100vw",
        marginX : "auto",
        minHeight : "100vh"
      }}>
        {/* removes browser defaults */}
        <CssBaseline/>
        <Nav data={navLinks} style={commonStyleProperties}/>
      </Box>
    </>
  )
}

export default App
