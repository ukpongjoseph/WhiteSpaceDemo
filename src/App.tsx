import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import { Box, Button, Chip, Slider, Switch, TextField } from '@mui/material'
import { buttonEffectOnHover, cardPlanEffectOnHover } from './styles'
import StaggeredWrapper from './StaggeredWrapper'

function App() {

  return (
    <>
      <div>
        Hello, This is just the bootstrap of the skeleton of the whitespace demo project
        <StaggeredWrapper component={<Nav message="Welcome to the Nav component!" />} delay={100} />
        <StaggeredWrapper component={<Hero message="Welcome to the Hero component!" />} delay={200} />
        <StaggeredWrapper component={<Button variant="contained" sx={{
          color: 'green',
          '&:hover': buttonEffectOnHover,
        }}>Hello World</Button>} delay={300} />
        <StaggeredWrapper component={<Slider sx={{
          '& .MuiSlider-rail': {
            color: 'green',
          }
        }} />} delay={400} />
        <StaggeredWrapper component={<Chip className='chipcustomclassname' sx={{
          '& .MuiChip-label': {
            color: 'blue'
          },
          '& .MuiSvgIcon-root': {
            color: 'red',
            // 'focusable' : 'true'
          }
        }} label="Practice Chip" onDelete={() => { }} />} delay={500} />
        <StaggeredWrapper component={<Box sx={{
          backgroundColor: 'lightblue',
          '&:hover': cardPlanEffectOnHover,
          height: '100px',
        }} component='div'>
          <Switch sx={{
            '& .MuiButtonBase-root .MuiSwitch-thumb': {
              color: 'green'
            },
            '& .MuiSwitch-track': {
              backgroundColor: 'yellow'
            }
          }} defaultChecked />
        </Box>} delay={600} />
        <TextField disabled sx={{
          '& label': {
            fontWeight: 'bold',
            fontSize: '30px',
            color: 'red'
          },
          '& .MuiInputLabel-shrink': {
            color: 'green'
          },
          '& .MuiInputBase-root': {
            borderRadius: '30px',
            '& input': {
              // backgroundColor : 'green'
            }
          },
          '& .Mui-disabled': {
            borderRadius: '0px'
          }
        }} label="Username" variant="outlined" />
      </div>
    </>
  )
}

export default App

