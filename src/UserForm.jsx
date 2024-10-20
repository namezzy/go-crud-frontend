import React, { useState } from 'react';

function UserForm({ onSubmit, initialValues }) {
  const [name, setName] = useState(initialValues?.name || '');
  const [email, setEmail] = useState(initialValues?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    if (!initialValues) {
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{initialValues ? 'Update' : 'Create User'}</button>
    </form>
  );
}

export default UserForm;