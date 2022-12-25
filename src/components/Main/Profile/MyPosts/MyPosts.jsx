import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

const updatePostActionCreator = (message) => {
    return {
        type: "UPDATE-POST",
        message: message
    }
}

const MyPosts = (props) => {
    const postsRender = props.postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    const postRef = React.createRef()


    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        const message = postRef.current.value
        props.dispatch(updatePostActionCreator(message))
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
