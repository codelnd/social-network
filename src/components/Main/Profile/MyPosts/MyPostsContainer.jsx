import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const postsRender = props.postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    const postRef = React.createRef()

    const addPost = () => {
        props.dispatch(addPostCreator())
    }

    const onPostChange = () => {
        const message = postRef.current.value
        const action = updatePostCreator(message)
        props.dispatch(action)
    }

    return (
        <MyPosts/>
    );
};

export default MyPostsContainer;
