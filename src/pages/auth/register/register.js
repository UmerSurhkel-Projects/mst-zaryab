import React, { useReducer, useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/assets';
import { ActionTypes } from '../../../types'
import { registrationAction } from '../../../actions/auth';

// Initial state
const initialState = {
	loading: false,
	error: null,
	user: null,
};

// Reducer function
const registrationReducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.REGISTER_START:
			return { ...state, loading: true, error: null };
		case ActionTypes.REGISTER_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case ActionTypes.REGISTER_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};


const Register = () => {
	const [state, dispatch] = useReducer(registrationReducer, initialState);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		agreeTerms: false
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic form validation
		if (formData.password !== formData.confirmPassword) {
			dispatch({ type: ActionTypes.REGISTER_FAIL, payload: "Passwords do not match." });
			return;
		}

		if (!formData.agreeTerms) {
			dispatch({ type: ActionTypes.REGISTER_FAIL, payload: "You must agree to the terms and conditions." });
			return;
		}

		// Perform registration
		registrationAction(formData, dispatch);
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
				<h2>Register</h2>
				<form className="auth-form login-form" onSubmit={handleSubmit}>
					<FormGroup className="mb-3">
						<input className="form-control" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
					</FormGroup>
					<FormGroup className="mb-3">
						<input className="form-control" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
					</FormGroup>
					<FormGroup className="mb-3">
						<input className="form-control" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
					</FormGroup>
					<FormGroup className="mb-3">
						<input className="form-control" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
					</FormGroup>
					<FormGroup className="mb-3">
						<label className="right-label-checkbox">I Agree with Terms &amp; Conditions
							<input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
							<span className="checkmark"></span>
						</label>
					</FormGroup>
					<FormGroup className="mb-3">
						<button type="submit" className="btn btn-solid transition">Register</button>
					</FormGroup>
					{state.loading && <p>Loading...</p>}
					{state.error && <p>Error: {state.error}</p>}
					{state.user && <p>Registered Successfully! Welcome, {state.user.name}</p>}
					<div className="d-flex justify-content-center">
						<p>
							Already have an account?{" "}
							<Link className="theme-link" to="/">Login</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
