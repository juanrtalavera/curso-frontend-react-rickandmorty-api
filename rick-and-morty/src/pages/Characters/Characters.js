import React, {useContext} from 'react'
import { ApiContext } from '../../context/context'
import './Characters.css'



const CharacterGallery = () => {
    const {characters} = useContext(ApiContext)
  return (
    <div className='grid'>
    {characters.map((character) => (
        <div className='card'>
        <h3 key={character.id}>{character.name}</h3>
        <img src={character.image} alt={character.name}></img>
        </div>
    ))}

    </div>
  )
}

export default CharacterGallery