import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get("http://localhost:8080/emp/getAll");
      setUsers(result.data);
    } catch (error) {
      alert("Error loading users", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/emp/del/${userId}`);
      loadUser(); 
    } catch (error) {
      alert("Unable to delete due to error: ", error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='py-3'>
          <table className="table border shadow ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Department</th>
                <th scope="col">Number</th>
                <th scope="col">Address</th>
                <th scope="col">Gender</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.department}</td>
                  <td>{user.number}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
