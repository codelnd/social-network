import React from 'react';
import s from './Post.module.css'

const Post = ({message, likes}) => {
    return (
        <div>
            <img className={s.avatar} src="https://galerey-room.ru/img_2/8c0c049d592c676f1c235b134c8a059b.jpg"
                 alt="image"/>
            {message}
            <div>
                <span>{likes}</span>
            </div>
        </div>
    );
};

export default Post;
