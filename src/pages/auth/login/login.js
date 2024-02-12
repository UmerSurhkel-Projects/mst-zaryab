import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/assets';
import { FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../api/authApi';
import '../../auth/auth.css';

const Login = ({ setUserData }) => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [login, { isLoading, isError, data, error }] = useLoginMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (data && data.success) { // Check if the API call was successful
			const { accessToken, data: userData } = data;

			// It's good to check if userData and accessToken are not undefined
			if (userData && accessToken) {
				const { password, ...userDataWithoutPassword } = userData; // Assuming you want to exclude the password
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('user', JSON.stringify(userDataWithoutPassword));
				setUserData(userDataWithoutPassword); // If you want to lift the state up to a parent component
				navigate('/dashboard');
			}
		} else if (isError) {
			console.error('Login failed:', error);
		}
	}, [data, isError, navigate]);


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(formData); // RTK Query API call
		} catch (apiError) {
			// Handled by RTK Query's isError state
		}
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