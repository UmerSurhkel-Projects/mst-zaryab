import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../assets/assets";
import { Container } from "react-bootstrap";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPowerOff, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../contexts/theme-context";
import defaultTheme from "../../config/config"
import "./header.css";

const Header = () => {
	const navigate = useNavigate();
	const [theme, setTheme] = useState(defaultTheme);

	const bodyElement = document.querySelector("body");
	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		navigate("/");
	};

	const toggleClass = () => {
		setTheme(!theme);
		if (theme) {
			bodyElement.classList.remove("dark-mode");
		} else {
			bodyElement.classList.add("dark-mode");
		}
	};

	return (
		<ThemeContext.Provider value={theme}>
			<header id="header" className="d-flex justify-content-between">
				<Container fluid>
					<div className="d-flex justify-content-between">
						<strong className="logo d-inline-block align-top">
							<Link to="/dashboard" className="inline-block align-top" >
								<img className="img-fluid logo-light" src={Images.siteLogoLight} alt="Site Logo" />
								<img className="img-fluid logo-dark" src={Images.siteLogoDark} alt="Site Logo" />
							</Link>
						</strong>
						<div className="d-flex align-items-center">
							<div className="d-flex align-items-center me-2">
								<span className="loggeduser-name" data-tooltip-id="my-tooltip" data-tooltip-content="John Doe">John Doe</span>
								<Link className="btn-logout d-flex justify-content-center align-items-center transition ms-2" to="/" onClick={() => handleLogout()}>
									<FontAwesomeIcon icon={faPowerOff} />
								</Link>
							</div>
							<Tooltip id="my-tooltip" />
							<span onClick={() => toggleClass()} className={`mode-switcher cursor-pointer transition d-flex justify-content-center align-items-center`}>
								<FontAwesomeIcon className="light-icon" icon={faSun} />
								<FontAwesomeIcon className="dark-icon" icon={faMoon} />
							</span>
						</div>
						<Tooltip id="my-tooltip" />
					</div>
				</Container>
			</header>
		</ThemeContext.Provider>
	);
};
export default Header;