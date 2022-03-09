import { useEffect, useState } from "react";
import axios from "axios";

const UserFetch = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        // fetch("http://localhost:3002/user")
        // .then(response => response.json())
        // .then(data => setUser(data))
        // .catch(err => console.log(err));
        const params = JSON.stringify({ name: "Fadhil" })
        const response = axios.get("http://localhost:3002/user",params);
        if(response.status === 200) {
            const res = response.data;
            setUser(res.user);
        }else{
            console.log('error');
        }
    }, []);
    
    return (
        <div>
        <h1>User Fetch</h1>
        {error ? (
            <div>
            <h3>{user.name}</h3>
            {/* <h4>{user.email}</h4> */}
            </div>
        ) : (
            <h2>Bad Request</h2>
        )}
        </div>
    );
}    

export default UserFetch;