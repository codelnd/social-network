import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            Посты
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Добавить пост</button>
            </div>
            {/*<div>Новый пост</div>*/}
            <Post message={'Привет'}/>
            <Post message={'Пост №1'}/>
        </div>
    );
};

export default MyPosts;