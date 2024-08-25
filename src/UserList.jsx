import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from './redux/userslice';
import User from './redux/User';


const UserList = () => {
    const dispatch=useDispatch();
const {users}=useSelector(store=>store.user);
console.log(users);

    useEffect(()=>{
dispatch(getAllUser())
    }, [])
    return (
        <div>
           {
            users && users.map((user)=>(
                <User user={user.name}/>
            ))
           }
        </div>
    );
}

export default UserList;
