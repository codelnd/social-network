import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPosts state={props.state.postData} addPost={props.addPost}/>
        </section>
    )
}

export default Profile
