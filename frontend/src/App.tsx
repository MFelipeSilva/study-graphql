import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

interface User {
  id: string,
  name: string,
}

export const GET_USER = gql`
  query {
    users {
      id,
      name,
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USER);

  console.log(data);

  if(loading) {
    return <p>Carregando...</p>
  }

  if(error) {
    return error;
  }

  return (
    <div>
      {data ? (   
        <div>
          <h2>Nomes bonitos:</h2>
          
          <ul>{data.users.map((user: User) => <li key={user.id} >{user.name}</li>)}</ul>
        </div>
      ) : ""}

      <NewUserForm />
    </div>
  );
}

export default App;
