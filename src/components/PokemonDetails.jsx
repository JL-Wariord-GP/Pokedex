import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosRequestPokemon from '../hooks/useAxiosRequestPokemon'

const PokemonDetails = () => {

  const { name } = useParams()

  const [dataPokemon, setDataPokemon] = useState({})
  const [species, setSpecies] = useState({})

  useAxiosRequestPokemon(name, setSpecies, setDataPokemon)
  const changeColor = color => color === 'yellow' ? '#f7d708' : color === 'white' ? 'gray' : color
  console.log(name);

  return (
    <div className='container__all_PokeDetails'>
      <header>
        <div className='container__nav__img'>
          <img className='nav__img' src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="logo-nav" />
          <div>
            <img className='nav__img2' src="https://i.makeagif.com/media/5-17-2014/xbBVYq.gif" alt="logo-nav" />
          </div>
        </div>
      </header>

      <main className='pokemon'style={{ background: `linear-gradient(to top, white 0%, white 60% , white 60%, ${changeColor(species.color?.name)} 100%)`, boxShadow: `1px 1px 8px ${changeColor(species.color?.name)}` }}>

        <section className=''>
          <figure className=''>
              <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt={`${dataPokemon.name} image`} />
            </figure>
            <section className=''>
              <p>{dataPokemon.name}</p>
            </section>
            <section className='poke_w_h'>
              <article className='poke__info__p'>
                <p>Weight</p>
                <p>{dataPokemon.weight}</p>
              </article>
              <article className='poke__info__p'>
                <p>Height</p>
                <p>{dataPokemon.height}</p>
              </article>
            </section>

            <section className='poke__type__abilit'>
              <section className=''>
                <h3>Type</h3>
                <section>
                  {dataPokemon.types?.map(type => <p className={`bg-${dataPokemon.types[0].type.name} ${type.type.name}`} key={type.type.name}>{type.type.name}</p>)}
                </section>
              </section>
              <section className=''>
                <h3>Abilities</h3>
                <section>
                  {dataPokemon.abilities?.map(abilitie => <p className='abilitie' key={abilitie.ability.name}>{abilitie.ability.name}</p>)}
                </section>
              </section>
          </section>
        </section>

        <section className='poke__data__container'>

          <h3>Stats</h3>
            <section className='pokemon__stats'>
                {dataPokemon.stats?.map(stat => (
                    <article className='pokemon__stat' key={stat.stat.name}>
                        <section className='stat__tittle'>
                            <p>{stat.stat.name}</p>
                            <p>{`${stat.base_stat} / 150`}</p>
                        </section>
                        <section className='stat__bar'>
                            <div className='stat__barProgress' style={{width: `${stat.base_stat * 100 / 150}%`}}></div>
                        </section>
                    </article>
                ))}
            </section>
        </section>

        
      </main>

    </div>
  )
}

export default PokemonDetails