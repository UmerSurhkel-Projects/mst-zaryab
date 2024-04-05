import images from '../../assets/assets';
import Skeleton from 'react-loading-skeleton';

const TopContact = () => {
    // Assume isLoading is a state variable indicating whether data is loading or not
    const isLoading = false; // Set to true when data is loading

    return (
        <div className="top-online-contacts">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {!isLoading ? (
                            // Show skeleton loading when data is loading
                            <div className="top-contacts-box">
                                <div className="profile-img online">
                                    <Skeleton height={200}  />
                                </div>
                                <div className="profile-name">
                                    <Skeleton height={5} width={100} />
                                </div>
                            </div>
                        ) : (
                            // Show actual content when data is loaded
                            <div className="top-contacts-box">
                                <div className="profile-img online">
                                    <img src={images.avatarEight} alt="image" />
                                </div>
                                <div className="profile-name">
                                    <span>helen</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopContact;
