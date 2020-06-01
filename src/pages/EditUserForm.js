import React from "react";

const EditFormUser = (props) => {
  const [user, setUser] = React.useState(props.currentUser);
  // Manejo de cambios 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // Manejo de Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUser(user.id, user);
  };
  // Aplicar cambios en el usuario
  React.useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditFormUser;
