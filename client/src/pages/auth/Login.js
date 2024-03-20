import React from 'react'
import Form from '../../components/shared/AllForm/Form.js'
import {useSelector} from 'react-redux'
import Spinner from '../../components/shared/Spinner.js'
import { toast } from 'react-toastify'

const Login = () => {
   const {loading,error}= useSelector(state=>state.auth)
    
  return (
    <>
    {error && <span>{toast(error)}</span>}
    {loading ? <Spinner/>:(
      <div className="row g-0">
        <div className="col-md-8 form-banner">
             <img src="./assets/images/banner1.jpg" alt="loginImage"/>
        </div>
        <div className="col-md-4 form-container">
     <Form formTitle={'Login Page'} submitBtn={"Login"} formType={"login"}/>
        </div>
      </div>

   )}
  </> 
  )
}

export default Login
