import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({ url }) => {

  const [pokeCard, setPokeCard] = useState()
  const navigate = useNavigate()

  const handleClick = () => navigate(`/pokedex/${pokeCard?.name}`)

  useEffect(() => {
    axios.get(url)
      .then(res => setPokeCard(res.data))
      .catch(error => console.log(error))
  }, [])


  return (
    <section onClick={handleClick} className={`box__container_pokercard bg-${pokeCard?.types[0].type.name}`}>
      <div className='container__pokecard'>
        <div>
          <img src={pokeCard?.sprites.other['official-artwork']['front_default']} />
        </div>
        <div className='container__pokecard__box__elements' >
          <div>
            <h2>{pokeCard?.name}</h2>
            <div className='container__pokecard__type'>
              {
                pokeCard?.types.map(slot => (
                  <div key={slot.type.url}>{slot.type.name}</div>
                ))
              }
            </div>
          </div>
          <hr />
          <div className='container__box__statPokemon'>
            {
              pokeCard?.stats.map(stat => (
                <StatPokemon

                  key={stat.stat.url}
                  infoStat={stat}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PokemonCard