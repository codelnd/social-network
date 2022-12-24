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

    const changeHandler = () => {
        const message = postRef.current.value
        props.dispatch({
            type: "UPDATE-POST",
            message
        })
    }


    return (
        <section className={s.posts}>
            Посты
            <div>
                <textarea ref={postRef} value={props.newPostMessage} onChange={changeHandler}/>
                <button onClick={addPost} className={s.add}>Добавить пост</button>
            </div>
            {postsRender}
        </section>
    );
};

export default MyPosts;
