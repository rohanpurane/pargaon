import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../services/userAuthApi'
import { storeToken } from '../../../services/LocalStorageService';
import { setUserToken } from '../../../features/authSlice';
import { getToken } from '../../../services/LocalStorageService';
import './Login.scss'

const Login = () => {
    const [server_error, setServer_error] = useState({})
    const navigate = useNavigate();
    const [loginUser, {isLoading}] = useLoginUserMutation()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
        email: data.get('email'),
        password: data.get('password'),
        }
        const res = await loginUser(actualData)
        if(res.error){
        setServer_error(res.error.data.errors)
        }
        if(res.data){
        storeToken(res.data.token)
        let { access_token } = getToken()
        dispatch(setUserToken({access_token : access_token}))
        navigate('/dashboard')
        }
    }
    let { access_token } = getToken()
    useEffect(() => {
        dispatch(setUserToken({ access_token : access_token }))
    }, [access_token, dispatch])

  return (
    <div>
        <div className="container-fluid">
            <div className="row vh-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="box col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="card p-4 p-sm-5 my-4 mx-3 slide-in-blurred-left">
                        <div className="card small-card ">
                            <h2 className="text-center text-white py-5">Login</h2>
                        </div>
                        <form action="" onSubmit={handleSubmit} method="post">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                                {server_error.email ? <div class="text-center text-danger">{server_error.email[0]}</div> : ''}
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" className="form-control" id="password" name='password' placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                                {server_error.password ? <div class="text-center text-danger">{server_error.password[0]}</div> : ''}

                                {server_error.non_field_errors ? <div class="alert alert-danger" role="alert">{server_error.non_field_errors[0]}</div> : ''}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <NavLink className='text-white' to='/' >Forgot Password ?</NavLink>
                            </div>
                            
                            {isLoading ? <div className="d-flex justify-content-center">
                                            <div class="spinner-border text-white" role="status">
                                                <span class="sr-only"></span>
                                            </div>
                                         </div> : <button type="submit"  className="btn btn-primary py-3 w-100 mb-4">Login</button>}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login