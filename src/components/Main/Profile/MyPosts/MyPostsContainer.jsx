import React from 'react';
import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const updateNewPostText = (message) => {
        const action = updatePostCreator(message)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} postData={state.postData} newPostMessage={state.newPostMessage}/>
    );
};

export default MyPostsContainer;
