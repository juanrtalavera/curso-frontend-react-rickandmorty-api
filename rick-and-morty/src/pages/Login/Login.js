import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


const Login = ({loginUser}) => {
    const INITIAL_STATE = {
        email:"",
        password:""
    };
    const [formUser, setFormUser] = useState(INITIAL_STATE);
    const handleInput = (ev) => {
      const {id, value} =ev.target;
      setFormUser({...formUser, [id]: value});

    };
    const navigate = useNavigate();
    const onSubmit = (ev) => {
      ev.preventDefault();
      const {email, password} = formUser;
      loginUser({email, password});
      navigate('/characters');
    };

  return (
    <div className='formLogin'>
    <h2>You have to log in to access the characters</h2>
    <form onSubmit={onSubmit} className='formInputs'>
      <label htmlFor='email'>Email</label>
      <input type="text" id='email' value={formUser.email} onChange={handleInput}></input>
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' value={formUser.password} onChange={handleInput}></input>
      <button type='submit'>Login</button>
    </form>
    <p className='formLogin' id='clue'>Clue: the email is the one of Rick's UpgradeHub and the password is the name of his series' partner ;-D</p>
    </div>
  )
}

export default Login