import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({postData}) => {
    return (
        <section className='profile'>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </section>
    )
}

export default Profile
