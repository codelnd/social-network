import React from 'react';

const Post = (props) => {
    return (
            <div>
                <img src="src/components/Main/Profile/MyPosts/Post/Post" alt="image"/>
                {props.message}
                <div>
                    <span>Нравится</span>
                </div>
            </div>
    );
};

export default Post;
