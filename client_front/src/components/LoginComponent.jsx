import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer';
import { loginUser } from '../actions/MainAction';

const LoginComponent = () => {
  const login = useSelector(state => state.Data.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeInpValue(e) {
    dispatch(changeStateValue({
      name: e.target.name,
      value: e.target.value
    }))
  }

  function loginBtn() {
          dispatch(loginUser(login))
          .then(resp => {
          if(resp == 'success') {
            dispatch(changeStateValue({
              name: 'loginUser',
              value: {
                  email: '',
                  password: ''
                }
            }))
            navigate('/')
            return {msg: 'User logined successfully'}
          } else {
          }
        })
    }

  return (
      <div className='login_main_container'>
          <h2>Login</h2>
          <div className="login_input_container">
              <input onChange={(e) => changeInpValue(e)} value={login.email} type="email" name='login.email' placeholder='Email or Username' />
              <input onChange={(e) => changeInpValue(e)} value={login.password} type="password" name='login.password' placeholder='Enter your Password' />
              <button onClick={() => loginBtn()}>Login</button>
              <div className="login_question">
                <p>Don't have an account yet?</p>
                <Link to='/register'>Register</Link>
              </div>
          </div>
      </div>
  )
}

export default LoginComponent