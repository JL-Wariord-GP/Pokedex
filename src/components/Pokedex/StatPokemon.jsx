import React from 'react'

const StatPokemon = ({ infoStat }) => {
  return (
    <div className='container__infoStat'>
      <div className='container__infoStat__son'>
        <h3>{infoStat.stat.name}</h3>
        <p>{infoStat['base_stat']}</p>
      </div>
    </div>
  )
}



export default StatPokemon