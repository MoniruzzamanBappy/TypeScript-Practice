import React, { useEffect, useState } from 'react';
import UserModel from '../types/model';
import UserSingle from './UserSingle';

const User = () => {

    const [user, setUser] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

     const handleAddUser = (user:UserModel): void=> {
         const newTeam = [...team, user]
         setTeam(newTeam)
     }
    return (
        <div>
            <h1>team size: {team.length}</h1>
            {/* <UserSingle addUser={handleAddUser} name="Bappy" age= {27} /> */}
            {
                user?.map(item=><UserSingle user={item} addUser={handleAddUser}></UserSingle>)
            }
        </div>
    );
};

export default User;