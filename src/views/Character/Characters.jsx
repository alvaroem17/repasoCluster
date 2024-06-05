import { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/characterService'
import CardCharacter from '../../components/CardCharacter/CardCharacter'
import "./Characters.css"

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    getCharacters()
  },[])

  const getCharacters = async () => {
    setCharacters(await getAllCharacters())
  }

  return (
    <div className='card-list'>
      {
        characters.map((char,idx) =>{
          return <CardCharacter key={idx} character={char}/>
        })
      }
    </div>
  )
}

export default Characters