import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} newPostMessage={props.profilePage.newPostMessage}
                     dispatch={props.dispatch}/>
        </section>
    )
}

export default Profile
