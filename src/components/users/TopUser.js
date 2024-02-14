import images from '../../assets/assets'

const TopUser = () => {
    return (
        <div className="top-online-contacts">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="top-contacts-box">
                            <div className="profile-img online">
                                <img src={images.avatarEight} alt="image" />
                            </div>
                            <div className="profile-name">
                                <span>helen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUser