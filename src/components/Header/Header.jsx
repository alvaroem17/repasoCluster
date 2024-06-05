import { AppBar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const options = ["Home", "Characters"]

const Header = () => {
  return (
    <AppBar position='sticky' sx={{display:"flex", flexDirection:"row"}}>
    {options.map((option, idx) => {
      return <Link to={option} key={idx}>
        <Button  sx={{ color:"white"}}>
          {option}
        </Button>
      </Link>
    })
    }
    </AppBar>
  )
}

export default Header