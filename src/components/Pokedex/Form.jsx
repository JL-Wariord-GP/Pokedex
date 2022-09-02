import React from 'react'

const Form = ({setPokeSearch, typeList, setFilterType}) => {
    const changeInputText = e => {
        setPokeSearch(e.target.value);
    }

    const changeSelect = e => {
        setFilterType(e.target.value)
    }

  return (
    <article>
        <form>
            <input type="text"  onChange={changeInputText} className='inputSearch'/>
        </form>
        <select onChange={changeSelect} className='allPokemons'>
            <option value='All Pokemons'>All Pokemons</option>
            {
                typeList?.map(type => (
                    <option 
                    key={type.name}
                    value={type.name}>{type.name}</option>
                ))
            }
        </select>
    </article>
  )
}

export default Form