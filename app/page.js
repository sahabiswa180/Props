
import UserCard from '../app/components/UserCard';
const HomePage = () => {
  const user = {
  name: 'Biswajit Saha',
  email: 'biswajit.techpenta@gmail.com',
  age: 27,
  };
  return (
  <div>
  <h1>Welcome to the Company!</h1>
  <UserCard user={user} />
  </div>
  );
};
export default HomePage;
