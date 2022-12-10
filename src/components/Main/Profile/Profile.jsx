import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state}) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPosts state={state}/>
        </section>
    )
}

export default Profile
