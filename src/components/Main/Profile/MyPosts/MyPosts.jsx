import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            Посты
            <div>
                <textarea name="" id="" cols="20" rows="4"></textarea>
                <button>Добавить пост</button>
            </div>
            <Post message={'Привет'}/>
            <Post message={'Пост №1'}/>
        </div>
    );
};

export default MyPosts;
