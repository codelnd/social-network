import React from 'react';
import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostChange = (message) => {
        const action = updatePostCreator(message)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} postData={state.postData} newPostMessage={state.newPostMessage}/>
    );
};

export default MyPostsContainer;
