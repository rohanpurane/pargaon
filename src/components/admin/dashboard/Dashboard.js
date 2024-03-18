import React from 'react'
import { useNavigate } from 'react-router-dom';
// import ChangePassword from './auth/ChangePassword';
import { getToken, removeToken } from '../../../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../../../features/authSlice';
import { useGetLoggedUserQuery } from '../../../services/userAuthApi'
import { useEffect, useState } from 'react';
import { setUserInfo, unSetUserInfo } from '../../../features/userSlice';


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const {data, isSuccess} = useGetLoggedUserQuery(access_token)
    const [userData, setUserData] = useState({
      email:"",
      username:"",
    })
    useEffect(() =>{
      if (data && isSuccess){
        setUserData({
          email: data.email,
          username: data.username,
        })
      }
    }, [data, isSuccess])
    useEffect(() =>{
      if (data && isSuccess){
        dispatch(setUserInfo({
          email: data.email,
          username: data.username,
        }))
      }
    }, [data, isSuccess, dispatch])
    const handleLogout = () => {
      dispatch(unSetUserInfo({name:"", email:""}))
      dispatch(unSetUserToken({access_token: null}))
      removeToken()
      navigate('/login')
    } 
  return (
    <div>
        <div class="container-fluid pt-4 px-4">
                <div class="row vh-100 bg-secondary rounded align-items-center justify-content-center mx-0">
                    <div class="col-md-6 text-center p-4">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1 fw-bold">{userData.username}</h1>
                        <h1 class="mb-4">{userData.email}</h1>
                        <button class="btn btn-primary rounded-pill py-3 px-5" onClick={handleLogout} type='button'>LogOut</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Dashboard