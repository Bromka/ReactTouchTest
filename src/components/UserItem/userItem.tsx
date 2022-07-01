import React, {FC} from 'react';
import "../../styles/main.css"
import Card from "../Card";
import {IUser} from "../../types/types";

const UserItem: FC<IUser> = (user) => {
    return (
        <div className="userItem">
            <Card>
                <div className="userCardInside">
                    <span>{`${user.name} lives in ${user.address.city} on ${user.address.street} ${user.address.suite}`}</span>
                </div>
            </Card>
        </div>
    );
};

export default UserItem;