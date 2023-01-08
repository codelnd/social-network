import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} postData={props.profilePage.postData} newPostMessage={props.profilePage.newPostMessage}
                     dispatch={props.dispatch}/>
        </section>
    )
}

export default Profile
