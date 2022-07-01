import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import PostItem from "./PostItem";
import {IPost} from "../types/types";
import axios from "axios";
import {useFetch} from "../hooks/hooks";

export interface PostListProps {

}

const PostList: FC<PostListProps> = () => {
    let [isLoading, posts] = useFetch<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    return (
        <div>
            {isLoading ? <div>loading</div> : <List items={posts} renderItem={(post: IPost) => <PostItem {...post} key={post.id}/>}/>}
        </div>
    );
};

export default PostList;