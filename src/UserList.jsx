import React, { useState } from 'react';
import UserForm from './UserForm';

function UserList({ users, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.ID}>
          {editingId === user.ID ? (
            <UserForm
              initialValues={user}
              onSubmit={(updatedUser) => {
                onUpdate(user.ID, updatedUser);
                setEditingId(null);
              }}
            />
          ) : (
            <>
              <div className="user-info">
                <strong>{user.Name}</strong> ({user.Email})
              </div>
              <div className="user-actions">
                <button onClick={() => setEditingId(user.ID)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(user.ID)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default UserList;