import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";


const MyPosts = (props) => {
    const postsRender = props.postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    const postRef = React.createRef()

    const addPost = () => {
        props.addPost()
        // props.dispatch(addPostCreator())
    }

    const onPostChange = () => {
        const message = postRef.current.value
        props.updateNewPostText(message)
        // const action = updatePostCreator(message)
        // props.dispatch(action)
    }

    return (
        <section className={s.posts}>
            Посты
            <div>
                <textarea ref={postRef} value={props.newPostMessage} onChange={onPostChange}/>
                <button onClick={addPost} className={s.add}>Добавить пост</button>
            </div>
            {postsRender}
        </section>
    );
};

export default MyPosts;
