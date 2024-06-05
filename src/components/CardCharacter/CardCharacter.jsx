import { Card, CardHeader, CardMedia } from "@mui/material"
import PropTypes from "prop-types"

const CardCharacter = ({ character }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        height: '15rem',
        "&:hover":{
          transform: 'scale(1.1)'
        }
      }}
    >
      <CardHeader title={character.name}></CardHeader>
      <CardMedia 
        sx={{ height: 180 }}
        image={character.image}
      />
    </Card>
  )
}

CardCharacter.propTypes = {
  character: PropTypes.object
}

export default CardCharacter