import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostCreator())
    }

    const onPostChange = (message) => {
        const action = updatePostCreator(message)
        props.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange}/>
    );
};

export default MyPostsContainer;
