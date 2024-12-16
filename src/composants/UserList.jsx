import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [RechercherUnUtilisateur, setRechercherUnUtilisateur] = useState('');
  const [FiltrerUnUtulisateur, setFiltrerUnUtulisateur] = useState([]);

  useEffect(() => {
    const StorageUser = localStorage.getItem('users');
    
    if (StorageUser) {
      setUsers(JSON.parse(StorageUser));
      setFiltrerUnUtulisateur(JSON.parse(StorageUser));
    } else {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      localStorage.setItem('users', JSON.stringify(data));
      
      setUsers(data);
      setFiltrerUnUtulisateur(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(RechercherUnUtilisateur.toLowerCase()) ||
      user.email.toLowerCase().includes(RechercherUnUtilisateur.toLowerCase())
    );
    setFiltrerUnUtulisateur(filtered);
  }, [RechercherUnUtilisateur, users]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Liste des Utilisateurs</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={RechercherUnUtilisateur}
          onChange={(e) => setRechercherUnUtilisateur(e.target.value)}
          className="w-full max-w-md border rounded-lg p-2"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FiltrerUnUtulisateur.map(user => (
          <div key={user.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <p className="text-gray-600">{user.website}</p>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;