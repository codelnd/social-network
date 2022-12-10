import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = ({postData}) => {
    const postsRender = postData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)
    return (
        <section className={s.posts}>
            Посты
            <div>
                <textarea></textarea>
                <button className={s.add}>Добавить пост</button>
            </div>
            {postsRender}
        </section>
    );
};

export default MyPosts;
