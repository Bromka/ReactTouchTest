import React, {FC} from 'react';
import {IPost} from "../types/types";
import Card from "./Card";

const PostItem: FC<IPost> = (post) => {
    return (
        <div className={"postCard"}>
            <Card>
                <div className="postTitle">{post.title}</div>
                <div className="postBody">{post.body}</div>
            </Card>
        </div>
    );
};

export default PostItem;