import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

const Crud = () => {
  // datos precargados
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  // valores iniciales
  const initialFormState = { id: null, name: "", username: "" };
  // state
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Metodos
  // Agregar un usuario
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  // Eliminar un usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  // Editar un usuario
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default Crud;
