import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
   const [data, setData] = useState([])

  const{id}=useParams();
  useEffect(() => {
   axios.get(`http://localhost:3006/users/${id}`)
   .then((response) => {
     console.log(response.data)
     setData(response.data);
   }) 
   .catch((error) => {
     console.error('Error fetching data:', error);
     });
  },[])
  return (
    <div className='d-flex  justify-content-center align-items-center bg-light'>
      <div className='w-middle text-start bg-white border shadow p-5  pt-3 pb-5 rounded'>
        <h3 className='text-center pb-3'>
          Details of User
        </h3>
        <div>
          <strong>Id:{data.id}</strong>
        </div>
        <div>
          <strong>First Name:{data.FirstName}</strong>
        </div>
        <div>
          <strong>Last Name:{data.LastName}</strong>
        </div>
        <div>
          <strong>Email:{data.Email}</strong>
        </div>
        <div>
          <strong>Department:{data.Department}</strong>
        </div>
        <div className='d-flex justify-content-between pt-3'>
        <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
        <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Read
