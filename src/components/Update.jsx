import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  // Initialize state for storing form values
  const [values, setValues] = useState({
      id: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Department: ''
  })
  
  // Get the 'id' parameter from the URL using useParams hook
  const { id } = useParams()
  
  // useNavigate hook to navigate programmatically after a successful update
  const navigate = useNavigate()

  // Fetch user data from API when the component mounts
  useEffect(() => {
    // Make a GET request to fetch the user data by ID
    axios.get(`http://localhost:3006/users/${id}`)
      .then(response => {
        // Set the fetched user data into the state
        setValues(response.data)
      })
      .catch(error => {
        // Log any error if fetching fails
        console.error('Error fetching data:', error);
      });
  }, [id]) // Dependency array, refetch data when 'id' changes

  // Handle form submission for updating the user
  const handleUpdate = (e) => {
    e.preventDefault() // Prevent default form submission

    // Make a PUT request to update the user data
    axios.put(`http://localhost:3006/users/${id}`, values)
      .then(response => {
        // Log the updated data if successful
        console.log(response.data)
        // Navigate back to the home page after the update is successful
        navigate('/')
      })
      .catch(error => {
        // Log any error if the update fails
        console.error('Error updating data:', error);
      })
  }

  return (
    // Main container for centering the form
    <div className='d-flex justify-content-center align-items-center bg-light'>
      <div className=' bg-white w-75 border shadow pt-1 pb-5 rounded'>
        <h2>
          Update User
        </h2>
        
        {/* Form for updating user details */}
        <form className='text-start m-3 d-flex flex-column gap-1' onSubmit={handleUpdate}>
          
          {/* ID input field (readonly for editing) */}
          <div>
            <label htmlFor="id">ID:</label>
            <input 
              className='form-control' 
              placeholder='Enter ID' 
              type="number" 
              id="id" 
              name="id" 
              value={values.id} 
              required 
              // Prevent changes to the ID field
              onChange={(e) => setValues({ ...values, id: e.target.value })} 
            />
          </div>
          
          {/* First Name input field */}
          <div className='mb-2'>
            <label htmlFor="name">First Name:</label>
            <input 
              className='form-control' 
              placeholder='Enter First Name'  
              type="text" 
              id="name" 
              name="name" 
              value={values.FirstName} 
              required 
              // Update state for FirstName
              onChange={(e) => setValues({ ...values, FirstName: e.target.value })} 
            />
          </div>
          
          {/* Last Name input field */}
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input 
              className='form-control' 
              placeholder='Enter Last Name' 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={values.LastName} 
              required 
              // Update state for LastName
              onChange={(e) => setValues({ ...values, LastName: e.target.value })} 
            />
          </div>
          
          {/* Email input field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              className='form-control' 
              placeholder='Enter Email' 
              type="email"  
              id="email" 
              name="email" 
              value={values.Email} 
              required 
              // Update state for Email
              onChange={(e) => setValues({ ...values, Email: e.target.value })} 
            />
          </div>

          {/* Department input field */}
          <div>
            <label htmlFor="department">Department:</label>
            <input 
              className='form-control'  
              placeholder='Enter Department' 
              type="text" 
              id="department" 
              name="department" 
              value={values.Department} 
              required 
              // Update state for Department
              onChange={(e) => setValues({ ...values, Department: e.target.value })} 
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Update
