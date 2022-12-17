import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
    const postsRender = props.state.postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    const postRef = React.createRef()
    const addPost = () => {
        const value = postRef.current.value
        console.log(value)
    }

    return (
        <section className={s.posts}>
            Посты
            <div>
                <textarea ref={postRef}></textarea>
                <button onClick={addPost} className={s.add}>Добавить пост</button>
            </div>
            {postsRender}
        </section>
    );
};

export default MyPosts;
