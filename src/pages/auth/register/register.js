import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/assets';
import { useRegisterMutation } from '../../../api/authApi';

const Register = () => {
	const [register, { isLoading, isError, data, error: apiError }] = useRegisterMutation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		agreeTerms: false
	});
	const [formError, setFormError] = useState(''); // Local state for form validation errors

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
		setFormError(''); // Reset form error when user changes input
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError(''); // Reset form error on new submission

		// Basic form validation
		if (formData.password !== formData.confirmPassword) {
			setFormError("Passwords do not match.");
			return;
		}

		if (!formData.agreeTerms) {
			setFormError("You must agree to the terms and conditions.");
			return;
		}

		// Prepare payload for the API (exclude confirmPassword)
		const payload = {
			name: formData.name,
			email: formData.email,
			password: formData.password,
			agreeTerms: formData.agreeTerms
		};

		// Perform registration
		register(payload);
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

					{isLoading && <p>Loading...</p>} {/* Loading indicator */}
					{!isLoading && isError && <div className="alert alert-danger">{apiError?.data?.message || 'Registration failed'}</div>}
					{!isLoading && !isError && data && <div className="alert alert-success">Registration successful!</div>}
					{formError && <div className="alert alert-danger">{formError}</div>} {/* Local form validation error */}

					<FormGroup className="mb-3">
						<button type="submit" className="btn btn-solid transition">Register</button>
					</FormGroup>
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
