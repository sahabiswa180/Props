const UserCard = ({ user }) => {
    return (
      <div>
        <h2>Name: {user.name}</h2>
        <p>Mail: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  };
  
  export default UserCard;
  