import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'
import Layout from '../components/shared/Layout/Layout'

const HomePage = () => {
  const {loading,error}= useSelector(state=>state.auth)
  return (
    <Layout>
     {error && <span>{alert(error)}</span>}
    {loading ? <Spinner/>:(
    
      <>  
      <h4 className='ms-4 mt-4'>
        <i className='<i class="fa-solid fa-plus text-success py-4"></i>'></i>Add Inventory
      </h4>
      </>
     
    )}</Layout>
  
  );
}

export default HomePage
