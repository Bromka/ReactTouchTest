import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import UserItem from "../UserItem/userItem";
import axios from "axios";
import List from "../List";


interface UserListProps {
}

const UserList: FC<UserListProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setLoading] = useState<Boolean>(false)

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        setLoading(true)
        try {
            let response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/');
            setUsers(response.data);
        } catch (e) {
            setLoading(false)
            console.error(e)
        }
        setLoading(false)
    }

    return (
        isLoading ? <div>loading</div> :
            <List items={users} renderItem={(user: IUser) => <UserItem {...user} key={user.id}/>}/>

    );
};

export default UserList;