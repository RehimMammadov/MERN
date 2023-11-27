import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer';
import { registerUser } from '../actions/MainAction';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
    const register = useSelector(state => state.Data.register)
    const dispatch = useDispatch();

    function changeInpValue(e) {
        dispatch(changeStateValue({
            name: e.target.name,
            value: e.target.value
        })) 
    }

    function registerBtn() {
        if(register.firstName !== '' && register.lastName !== '' && register.email !== '' && register.password !== ''){
            console.log(register)
            dispatch(registerUser(register))
            .then(resp => {
                dispatch(changeStateValue({
                    name: 'registerUser',
                    value: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }
                }))
            })
        }
    }
    return (
        <div className='login_main_container'>
            <h2>Register</h2>
              <div className="login_input_container">
                  <input onChange={(e) => changeInpValue(e)} value={register.firstName} type="text" name='register.firstName' placeholder='First_name' />
                  <input onChange={(e) => changeInpValue(e)} value={register.lastName} type="text" name='register.lastName' placeholder='Last_name' />
                  <input onChange={(e) => changeInpValue(e)} value={register.email} type="email" name='register.email' placeholder='Email' />
                  <input onChange={(e) => changeInpValue(e)} value={register.password} type="password" name='register.password' placeholder='Password' />
                  <button onClick={() => registerBtn()}>Register</button>
                  <div className="login_question">
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                  </div>
              </div>
        </div>
  )
}

export default RegisterComponent