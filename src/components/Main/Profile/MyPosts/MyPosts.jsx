import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <section className={s.posts}>
            Посты
            <div>
                <textarea name="" id="" cols="20" rows="4"></textarea>
                <button className={s.add}>Добавить пост</button>
            </div>
            <Post message={'Привет'}/>
            <Post message={'Пост №1'}/>
        </section>
    );
};

export default MyPosts;
