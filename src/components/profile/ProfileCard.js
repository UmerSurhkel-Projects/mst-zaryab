import { useGetUserProfileQuery } from '../../api/UserApi';
import images from '../../assets/assets';
const ProfileCard = () => {
    const { data } = useGetUserProfileQuery();
    const userProfile = data?.user;
    const socialPlatform = data?.user?.socialLinks;
    return (
        <div className="profile-card">
            <div className="profile-cover text-center mb-3">
                <label className="profile-cover-avatar" for="avatar_upload">
                    <img className="" src={userProfile?.imageUrl ||  images.placeHolder} alt="Profile Image" />
                    <input type="file" id="avatar_upload" />
                    <span className="avatar-edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2 avatar-uploader-icon shadow-soft">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                    </span>
                </label>
                <h5 className="mt-3 profile-name mb-1">{userProfile?.firstName}</h5>
                <p className="profile-email mb-1">
                    <a href={`mailto:${userProfile?.email}`} className="__cf_email__" >{userProfile?.email}</a>
                </p>
                <h5 className="profile-country mb-0">USA</h5>
            </div>
            <div className="profile-info">
                <div className="text-center mb-4">
                    <p className="info-title mb-0">Phone</p>
                    <span className="info-text">{userProfile?.phoneNumber}</span>
                </div>
                <div className="text-center mb-4">
                    <p className="info-title mb-0">Nick Name</p>
                    <span className="info-text">{userProfile?.nickName}</span>
                </div>
                <div className="text-center mb-4">
                    <p className="info-title mb-0">Email</p>
                    <span className="info-text">
                        <a href={`mailto:${userProfile?.email}`} className="__cf_email__">
                            {userProfile?.email}
                        </a>
                    </span>

                </div>
                <ul className="social-nav p-0 mb-0 text-center">
                    <li><a href={socialPlatform?.facebook}><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href={socialPlatform?.instagram}><i className="fab fa-instagram"></i></a> </li>
                    <li><a href={socialPlatform?.twitter}><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard