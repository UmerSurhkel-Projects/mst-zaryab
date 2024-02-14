import images from "../../../assets/assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const initialValues = {
        email: '',
        password: '',
        acceptTerms: false,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    });

    const onSubmit = fields => {
        console.log('Form data:', fields);
    };

    return (
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
                                    {({ errors, touched, setFieldValue }) => (
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

                                            <div className="form-group form-check mt-3">
                                                <Field type="checkbox" name="acceptTerms" className={'form-check-input custom-check d-flex flex-wrap ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                                <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                                                <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                            </div>

                                            <div className="pt-1">
                                                <div className="text-center">
                                                    <button className="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
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
    )
}

export default Login