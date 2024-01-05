import { useState, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/assets';
import { FormGroup } from 'react-bootstrap';
import { ActionTypes } from '../../../types';
import { loginAction } from '../../../actions/auth';
import { useNavigate } from "react-router-dom";
import '../auth.css';

const initialState = {
	loading: null,
	error: null,
	user: null,
};

const loginReducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN_START:
			return { ...state, loading: true, error: null };
		case ActionTypes.LOGIN_SUCCESS:
			localStorage.setItem('accessToken', action.payload.accessToken);
			return {
				...state,
				loading: false,
				user: action.payload.userData,
				accessToken: action.payload.accessToken
			};
		case ActionTypes.LOGIN_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const Login = () => {
	const [state, dispatch] = useReducer(loginReducer, initialState);
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (state.accessToken) {
			console.log('Navigating to /dashboard');
			navigate('/dashboard');
		}
	}, [state.accessToken, navigate]);



	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		loginAction(formData)(dispatch);
	};


	return (
		<div className="auth-outer d-flex justify-content-center align-items-center flex-column">
			<div className="logo-holder d-flex justify-content-center mb-3 mb-md-5">
				<strong className="d-inline-block align-top">
					<img className="img-fluid logo-light" src={Images.siteLogoLight} alt="Site Logo" />
					<img className="img-fluid logo-dark" src={Images.siteLogoDark} alt="Site Logo" />
				</strong>
			</div>
			<div className="auth-block text-center">
				<h2>Login</h2>
				<form className="auth-form login-form" onSubmit={handleSubmit}>
					<FormGroup className="mb-3">
						<input className="form-control" type="email" name='email' value={FormData.email} onChange={handleChange} placeholder="Email" required />
					</FormGroup>
					<FormGroup className="mb-3">
						<input className="form-control" type="password" name='password' value={FormData.password} onChange={handleChange} placeholder="Password" required />
					</FormGroup>
					<FormGroup className="mb-3">
						<button type="submit" className="btn btn-solid transition">Log in</button>
					</FormGroup>
					<div className="d-flex justify-content-center">
						<p>Don't have account?{" "}
							<Link className="theme-link" to="/register">
								Register
							</Link>
						</p>
					</div>
					{/* {state.loading && <p>Loading...</p>}
					{state.error && <p>Error: {state.error}</p>} */}
				</form>
			</div>
		</div>
	)
}

export default Login