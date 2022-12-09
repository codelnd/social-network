import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    const postData = [
        {
            id: 1,
            message: 'Всем привет',
            likes: 10
        },
        {
            id: 2,
            message: 'Мой первый пост',
            likes: 4
        },
        {
            id: 3,
            message: 'Освоил redux!',
            likes: 99
        },
    ]
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
