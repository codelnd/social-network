import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
    const postsRender = props.postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    const postRef = React.createRef()

    const addPost = () => {
        props.dispatch({
            type: "ADD-POST"
        })
    }

    const onPostChange = () => {
        const message = postRef.current.value
        const action = {
            type: "UPDATE-POST",
            message: message
        };
        props.dispatch(action)
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
