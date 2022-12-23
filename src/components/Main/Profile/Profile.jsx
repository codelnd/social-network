import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} newPostMessage={props.profilePage.newPostMessage}
                     addPost={props.addPost} updatePost={props.updatePost}/>
        </section>
    )
}

export default Profile
