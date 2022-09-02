import { Pagination } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PaginationPoke from './Pagination'
import Form from './Pokedex/Form'
import PokemonCard from './Pokedex/PokemonCard'


const Pokedex = () => {
  const nameTrainer = useSelector(state => state.nameTrainer)
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [filterType, setFilterType] = useState('All Pokemons')
  const [typeList, setTypeList] = useState()

  const [currentPage, setCurrentPage] = useState(1)
  
  let arrPoke = []
  const pokemonsPerPage = 6
  if (pokemons?.length < pokemonsPerPage) {
    arrPoke = [...pokemons?.length]
  } else {
    const lastPokemons = currentPage * pokemonsPerPage
    arrPoke = pokemons?.slice(lastPokemons - pokemonsPerPage, lastPokemons)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(pokemons?.length / pokemonsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)

if (currentBlock * pagesPerBlock >= quantityPages) {
  for (let i =  currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ;i++) {
    arrayPages.push(i)
  }
} else {
  for(let i = currentBlock * pagesPerBlock - pagesPerBlock +1; i <= currentBlock * pagesPerBlock; i++)
    arrayPages.push(i)
}

console.log(arrayPages);

  useEffect(() => {
    if (filterType === 'All Pokemons') {
      const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
      axios.get(URL)
        .then(res => {
          setPokemons(res.data.results)
          setPosts(res.data)
        })
        .catch(error => console.log(error))
    }
    else {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
      axios.get(URL)
      .then(res => {
        const arrayPokemon = res.data.pokemon.map(e => e.pokemon)
        setPokemons(arrayPokemon)
      })
      .catch(error => console.log(error))
    }
  }, [filterType])


  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypeList(res.data.results))
      .catch(error => console.log(error))
  }, [])
  

  useEffect(() => {
    setFilterPokemon(pokemons?.filter(e => e.name.includes(pokeSearch.toLowerCase())))

  }, [pokeSearch])

  return (
    <div> 
      <div>
        <header>
          <div className='container__nav__img'>
            <img className='nav__img' src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="logo-nav"/>
            <div>
            <img className='nav__img2' src="https://i.makeagif.com/media/5-17-2014/xbBVYq.gif" alt="logo-nav"/>
            </div>
          </div>
        </header>
        <main>
          <ul>
            <h1><span>{`Welcome ! ${nameTrainer}`}</span>, here you can find your favorite pokemon</h1>
          </ul>
          <Form 
            setPokeSearch={setPokeSearch}
            setFilterType={setFilterType}
            typeList={typeList}
          />
        </main>
      </div>
        
      <div className='box__all__pokecard'>
        
        {
          filterPokemon ? 
          filterPokemon?.map(pokemon => (
            <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
          :
          arrPoke?.map(pokemon => (
            <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
        }

      </div>
      <PaginationPoke 
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
    </div>
  )
}

export default Pokedex