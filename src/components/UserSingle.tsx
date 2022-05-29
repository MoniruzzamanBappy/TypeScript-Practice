// import React, { FC } from 'react';

// const UserSingle: FC<{name: string, age: number}> = (props) => {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>Name: {props.age}</h1>
//         </div>
//     );
// };

// export default UserSingle;

import React, { FC } from 'react';
import UserModel from '../types/model';

// interface Props{
//     name: string,
//     age: number, 
//     addUser: ()=>void
// }

interface Props {
    user: UserModel
    addUser: (user: UserModel) => void
}

const UserSingle: FC<Props> = ({user, addUser}) => {
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <button onClick={()=>addUser(user)}>Add me</button>
        </div>
    );
};

export default UserSingle;