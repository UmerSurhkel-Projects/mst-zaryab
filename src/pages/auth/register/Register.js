import { Link } from "react-router-dom"
import images from "../../../assets/assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
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
                                    <h3>Sign up</h3>
                                </div>
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                    {({ errors, touched, setFieldValue }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="firstName">First Name</label>
                                                <Field name="firstName" type="text" className={'form-control form-control-lg group_formcontrol' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastName">Last Name</label>
                                                <Field name="lastName" type="text" className={'form-control form-control-lg group_formcontrol' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                            </div>
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
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                <Field name="confirmPassword" type="password" className={'form-control form-control-lg group_formcontrol' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group form-check">
                                                <Field type="checkbox" name="acceptTerms" className={'form-check-input custom-check d-flex flex-wrap ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                                <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                                                <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                            </div>

                                            {/* <div className="form-group">
                                                <label className="custom-check d-flex flex-wrap">
                                                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />I agreed to all the <Link to="#" data-bs-toggle="modal" data-bs-target="#terms"> Terms & Conditions,</Link><Link to="#">Privacy Policy.</Link>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div> */}
                                            <div className="pt-1">
                                                <div className="text-center">
                                                    <button className=" newgroup_create btn-block d-block w-100" type="submit">Create Account</button>
                                                </div>
                                            </div>

                                            <div className="text-center dont-have">Already have an Account?  <Link to="/login">Login</Link></div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div className="back-btn-col text-center">
                                <Link to="/"><span><FontAwesomeIcon icon={faCaretLeft} /></span> Back</Link>
                            </div>
                        </div>

                    </div>
                    <div className="login-right signup-bg">
                    </div>
                </div>

            </div>

            <div className="modal fade" id="terms">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Terms & Conditions
                            </h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="terms-card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum vulputate facilisi eu ultricies integer diam. Eu ullamcorper arcu dui, eget volutpat risus dui. Donec nulla mi neque, egestas tristique non. Vel pellentesque dolor nibh scelerisque turpis. Lacus magna vestibulum, quis aliquam nunc, euismod amet.</p>
                                <p>Aliquet elit sapien orci ipsum faucibus fermentum habitant. Ac quam sit leo posuere nulla dignissim. In mi, velit vitae dictum ac. Suscipit orci, sit amet mi massa gravida lectus elit. Auctor lorem arcu quis commodo nibh ipsum. Lectus amet, ultrices nec amet sed condimentum donec.</p>
                                <p className="mb-0">Arcu sed aenean venenatis arcu in at varius. Elementum, nunc, malesuada pretium cras sed praesent mi arcu urna. Erat maecenas lectus pharetra, blandit lectus.</p>
                            </div>
                            <div className="text-end mt-3 align-items-center">
                                <button type="button" className="btn newgroup_create mb-0 close-btn" data-bs-dismiss="modal" aria-label="Close">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register