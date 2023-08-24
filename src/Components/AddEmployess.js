import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddEmployees() {
  const navigator = useNavigate();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    department: '',
    number: '',
    address: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/emp/addEmployees', user);
      navigator('/');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
          <h2 className='py-3 text-center'>Please fill in the details</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>First Name</label>
              <input
                type='text'
                className='form-control'
                name='firstname'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='lastname'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Department</label>
              <input
                type='text'
                className='form-control'
                name='department'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Number</label>
              <input
                type='text'
                className='form-control'
                name='number'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Address</label>
              <input
                type='text'
                className='form-control'
                name='address'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Gender</label>
              <input
                type='text'
                className='form-control'
                name='gender'
                onChange={handleInputChange}
              />
            </div>
            {/* ... Other input fields ... */}
            <div className='text-center'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              <button
                type='button'
                className='btn btn-danger mx-3'
                onClick={() => navigator('/')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
