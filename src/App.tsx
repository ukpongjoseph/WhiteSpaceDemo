import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import { Breadcrumbs, Button, Chip, Slider, Switch, TextField } from '@mui/material'

function App() {

  return (
    <>
      <div>
          Hello, This is just the bootstrap of the skeleton of the whitespace demo project
          <Nav message="Welcome to the Nav component!" />
          <Hero message="Welcome to the Hero component!" />
          
      </div>
    </>
  )
}

export default App




{/* <Button sx={{
            '&.MuiButton-text' : {
              color : 'red'
            }
          }}>Hello World</Button>
          <Slider sx={{
            '& .MuiSlider-rail' : {
              color : 'green'
            }
          }}/>
          <Chip sx={{
            '& .MuiChip-label' : {
              color : 'blue'
            },
            '& .MuiSvgIcon-root' : {
              color : 'red',
              // 'focusable' : 'true'
            }
          }} label="Practice Chip" onDelete={() => {}} />
          <div>
            <Switch sx={{
            '& .MuiButtonBase-root .MuiSwitch-thumb' : {
              color : 'green'
            },
            '& .MuiSwitch-track' : {
              backgroundColor : 'yellow'
            }
          }} defaultChecked />
          </div>
          <TextField sx={{
            '& label' : {
              fontWeight : 'bold',
              fontSize : '30px',
              color : 'red'
            },
            '& .MuiInputLabel-shrink' : {
              color : 'green'
            },
            '& .MuiInputBase-root' : {
              borderRadius : '30px',
              '& input' : {
                // backgroundColor : 'green'
              }
            }
          }} label="Username" variant="outlined" /> */}
