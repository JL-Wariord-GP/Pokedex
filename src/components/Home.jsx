import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';

const Home = () => {
  const dispatch = useDispatch();	
  const navigate = useNavigate();

  const btnSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    if (inputValue.length !== 0){
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ''
  }

  return (
    <div className='container__home'>
      <div>
        <img className='logo__home' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
      </div>

      <div className='container__home_p_form'>
        <p>To Start give me your trainer name</p>
        <form onSubmit={btnSubmit} className='container__form__home'>
          <input type="text" id='name' className='inputSearch input__home' placeholder='¿What is your name?' required/>
          <button className='btn__home'>
            <img className='send' src="https://cdn-icons-png.flaticon.com/512/660/660619.png" alt="send" />
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default Home