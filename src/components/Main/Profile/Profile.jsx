import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </section>
    )
}

export default Profile
