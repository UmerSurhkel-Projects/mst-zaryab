import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../../api/AuthApi';
import './verifyEmail.css';

const VerifyEmail = () => {
    const { id, token } = useParams();
    const [verifyEmail, { isLoading, isSuccess, isError, error }] = useVerifyEmailMutation();

    useEffect(() => {
        if (token) {
            verifyEmail({ id, token });
        }
    }, [id, token, verifyEmail]);

    return (
        <div className="verify-email-page d-flex align-items-center justify-content-center">
            <div className="verify-email-card text-center">
                {isLoading && (
                    <div className="verify-email-loading">
                        <p>Verifying your email...</p>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {isSuccess && (
                    <div className="verify-email-success">
                        <h2>Success!</h2>
                        <p>Your email has been successfully verified!</p>
                        <Link to="/login" className="btn btn-success">Go to Login</Link>
                    </div>
                )}
                {isError && (
                    <div className="verify-email-error">
                        <h2>Error</h2>
                        <p>Error verifying email: {error?.data?.message || 'Unknown error'}</p>
                        <Link to="/" className="btn btn-danger">Return Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
