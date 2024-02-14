import { useState, useEffect } from 'react';
import ThemeContext from '../../contexts/theme-context';
import defaultTheme from '../../config/config';
import { Link } from 'react-router-dom';
import images from '../../assets/assets';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FlagIcon from '@mui/icons-material/Flag';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    });

    useEffect(() => {
        const bodyElement = document.querySelector("body");
        if (theme === 'darkmode') {
            bodyElement.classList.add("darkmode");
        } else {
            bodyElement.classList.remove("darkmode");
        }
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggleClass = () => {
        setTheme(currentTheme => currentTheme === 'darkmode' ? 'lightmode' : 'darkmode');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className="sidebar-menu">
                <div className="logo-col">
                    <Link to="/"><img src={images.logo} alt="logo" /></Link>
                </div>
                <div className="menus-col">
                    <div className="chat-menus">
                        <ul>
                            <li><Link to="/" className="chat-unread blue"><MessageIcon /></Link></li>
                            <li><Link to="/" className="chat-unread pink"><GroupIcon /></Link></li>
                            <li><Link to="/" className="chat-unread"><LibraryBooksIcon /></Link></li>
                            <li><Link to="/" className="chat-unread"><CallIcon /></Link></li>
                            <li><Link to="/" className="chat-unread"><SettingsIcon /></Link></li>
                        </ul>
                    </div>
                    <div className="bottom-menus">
                        <ul>
                            <li><Link to="/" className="add-new-group"><GroupAddIcon /></Link></li>
                            <li><Link to="/" className="add-contacts-btn"><FontAwesomeIcon icon={faPlus} /></Link></li>
                            <li><span to="/" onClick={() => toggleClass()} className="dark-mode-toggle"><DarkModeIcon /></span></li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className="chat-profile-icon no-caret">
                                        <Image src={images.avatarThirteen} roundedCircle alt="avatar" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="between" >
                                        <Dropdown.Item href="/"> Edit Profile <EditIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Profile <AccountBoxIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Settings <SettingsIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Archived <FlagIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Logout <PowerSettingsNewIcon /> </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default Sidebar;
