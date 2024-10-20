import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserList from './UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async (user) => {
    try {
      await axios.post('http://localhost:8080/user', user);
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      await axios.put(`http://localhost:8080/user/update?id=${id}`, user);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/delete?id=${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="App">
      <h1>User Management System</h1>
      <UserForm onSubmit={createUser} />
      <UserList users={users} onUpdate={updateUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;