import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useLoginMutation, useResendEmailMutation, useVerifyOtpMutation } from "../../../api/AuthApi";
import { ToastContainer, toast } from 'react-toastify';
import images from "../../../assets/assets";
import OtpModal from "../../../components/security/OtpModal";

const Login = () => {
    const navigate = useNavigate();
    const [login, { isLoading, isSuccess }] = useLoginMutation();
    const [resendEmail] = useResendEmailMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [showOtpModal, setShowOtpModal] = useState(false)
    const initialValues = { email: '', password: '', };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('accessToken');
        if (isAuthenticated) {
            navigate('/');
        }
    }, [navigate]);

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await login(values).unwrap();
            const { accessToken, user } = response;
            if (response) {
                return setShowOtpModal(true);
            }
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('user', JSON.stringify(user));
                setSubmitting(false);
            

            if (response) {
                toast("Login successful");
            }
            navigate("/");
            console.log('User logged in:', user);
        } catch (err) {
            console.error('Login error:', err);

            if (err.status === 404 && err.data && err.data.message === "An email has been sent to your account first verify it") {
                Swal.fire({
                    title: 'Account Verification Required',
                    text: 'Please verify your account first. Check your email for the verification link.',
                    icon: 'info',
                    confirmButtonText: 'Resend Email',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        resendEmail({ email: values.email })
                            .unwrap()
                            .then(() => {
                                Swal.fire('Sent!', 'Verification email has been resent.', 'success');
                            })
                            .catch((error) => {
                                console.error('Resend verification email error:', error);
                                Swal.fire('Failed!', 'Failed to resend verification email.', 'error');
                            });
                    }
                });

            } else {
                Swal.fire({
                    title: 'Login Failed',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } finally {
            if (!showOtpModal) setSubmitting(false);
        }
    };
    const handleOtpSubmit = async (otp, value) => {
        try {
            const verificationData = { otp, value: true };
            const response = await verifyOtp(verificationData).unwrap();
            localStorage.setItem('accessToken', response.user.accessToken);
            navigate('/');
            toast.success("OTP verification successful");
        } catch (error) {
            console.error("OTP Verification error:", error);
            toast.error("OTP verification failed");
        } finally {
            setShowOtpModal(false);
        }
    };

    return (
        <>
            <ToastContainer />
            {showOtpModal && <OtpModal onSubmit={handleOtpSubmit} onClose={() => setShowOtpModal(false)} />}
            <div className="main-wrapper">
                <div className="content align-items-center">
                    <div className="w-100 ">
                        <div className="login-left">

                            <div className="account-content">
                                <div className="login-header">
                                    <Link to="index.html">
                                        <img src={images.logoFull} alt="image" />
                                    </Link>
                                </div>
                                <div className="form-col">
                                    <div className="login-text-details">
                                        <h3>Log in</h3>
                                        <p>Login with your Data that you entered during your Registration</p>
                                    </div>
                                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                        {({ errors, touched ,isSubmitting }) => (
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <Field name="email" type="email" className={'form-control form-control-lg group_formcontrol' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <Field name="password" type="password" className={'form-control form-control-lg group_formcontrol' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                </div>

                                                <div className="pt-1">
                                                    <div className="text-center">
                                                    <button className={`btn newgroup_create btn-block d-block w-100 ${isSuccess ? "disable" : ""}`} type="submit" disabled={isSuccess}>Login</button>
                                                    </div>
                                                </div>

                                                <div className="text-center dont-have">Don’t have an account? <Link to="/register">Signup</Link></div>
                                                <div className="text-center mt-3">
                                                    <span className="forgot-link">
                                                        <Link to="forgotpassword-email.html" className="text-end">Forgot Password ?</Link>
                                                    </span>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <div className="back-btn-col text-center">
                                    <Link to="/"><span><FontAwesomeIcon icon={faCaretLeft} /></span> Back</Link>
                                </div>
                            </div>
                        </div>
                        <div className="login-right">
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login