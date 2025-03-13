import React, {useEffect, useState} from 'react'
import DataFetcher from './DataFetcher'
import {UserInterface} from './UserInterface'

const App = () => {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAndHandleErrors = async () => {
            try {
                setLoading(true);
                const data = await DataFetcher();
                setUsers(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
            }
            fetchDataAndHandleErrors();
            }, []);
        
  return (

    <div style={{textAlign: 'center', marginLeft: '500px', backgroundColor: 'violet', width: '500px'}}>
      <h1>Users list</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul style={{backgroundColor: 'lightsalmon'}}>
         {users.map((user) => (
            <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
                <hr />
            </li>
          ))}
       </ul>
        )}
    </div>
  )
}

export default App

