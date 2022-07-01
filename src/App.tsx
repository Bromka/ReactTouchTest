import React, {useEffect, useState} from 'react';
import UserList from "./components/UserList/userList";
import axios from "axios";
import {IUser} from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem/userItem";
import PostList from "./components/PostList";

function App() {
    return (
        <div className="App">

            <PostList />
            <header className="App-header">
                <h1>Users:</h1>
            </header>
            <UserList />
        </div>
    );
}

export default App;
