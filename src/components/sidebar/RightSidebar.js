import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import images from '../../assets/assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCloudDownloadAlt, faEllipsisH, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const RightSidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className={`right-sidebar right_sidebar_profile ${isSidebarVisible ? '' : 'hide-right-sidebar'}`} id="middle1">
            <div className="right-sidebar-wrap active">
                <Scrollbars style={{ height: 900 }}>
                    <div className="slimscroll">
                        <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
                            <div className="chat-title">
                                <h4>PROFILE</h4>
                            </div>
                            <div className="contact-close_call text-end">
                                <Link href="#"
                                    className="close_profile close_profile4">
                                    <span className="material-icons" onClick={toggleSidebar}>close</span>
                                </Link>
                            </div>
                        </div>
                        <div className="sidebar-body">
                            <div className="mt-0 right_sidebar_logo">
                                <div className="text-center mb-2 right-sidebar-profile">
                                    <figure className="avatar avatar-xl mb-3">
                                        <img src={images.avatarTwo} className="rounded-circle" alt="image" />
                                    </figure>
                                    <h5 className="profile-name">Scott Albright</h5>
                                    <div className="online-profile">
                                        <span>online</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="about-media-tabs">
                                        <nav>
                                            <div className="nav nav-tabs justify-content-center" id="nav-tab">
                                                <Link className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#about">About</Link>
                                                <Link className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#media" >Media</Link>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="about">
                                                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                                <div className="member-details">
                                                    <ul>
                                                        <li>
                                                            <h6>Phone</h6>
                                                            <span>555-555-21541</span>
                                                        </li>
                                                        <li>
                                                            <h6>Nick Name</h6>
                                                            <span>Alberywo</span>
                                                        </li>
                                                        <li>
                                                            <h6>Email</h6>
                                                            <span><Link href="" className="__cf_email__">[email&#160;protected]</Link></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="social-media-col">
                                                    <h6>Social media accounts</h6>
                                                    <ul>
                                                        <li><Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                                        <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                        <li><Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                                        <li><Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                                        <li><Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="settings-col">
                                                    <h6>Settings</h6>
                                                    <ul>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox"  />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Block</span>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Mute</span>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex align-items-center">
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Get notification</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="media">
                                                <div className="file-download-col">
                                                    <ul>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="assets/img/chat-download.jpg" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="image-download-col">
                                                                <Link href="" data-fancybox="gallery" className="fancybox">
                                                                    <img src={images.chatDownload} alt="" />
                                                                </Link>
                                                                <div className="download-action d-flex align-items-center">
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faCloudDownloadAlt} /></Link></div>
                                                                    <div><Link to="#"><FontAwesomeIcon icon={faEllipsisH} /></Link></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="full-width text-center">
                                                            <Link to="#" className="load-more-btn">
                                                                More 154 Files <FontAwesomeIcon icon={faSortDown} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="report-col">
                            <ul>
                                <li><Link href="#"><span className="material-icons">report_problem</span> Report Chat</Link></li>
                                <li>
                                    <Link to="#">
                                        <FontAwesomeIcon icon={faTrashAlt} /> Delete Chat
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default RightSidebar;