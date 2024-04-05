import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useUpdateUserProfileMutation, useGetUserProfileQuery } from '../../api/UserApi';
import { useChangePasswordMutation, useVerifyOtpMutation, useTwoStepVerificationMutation, useDeleteAccountMutation } from '../../api/AuthApi';
import VerificationModal from '../security/VerificationModal';
import OtpModal from '../security/OtpModal';

const UpdateUserInfo = ({ twoStepVerificationFlag }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);

    const [twoStepVerification] = useTwoStepVerificationMutation();
    const [updateUserProfile, { isSuccess }] = useUpdateUserProfileMutation();
    const { data: userProfileData } = useGetUserProfileQuery();
    const [changePassword, { data: changePasswordData, isSuccess: isPasswordChangeSuccess, error: changePasswordError }] = useChangePasswordMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationType, setVerificationType] = useState(null);
    const userProfile = userProfileData?.user;
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(userProfile?.imageUrl || '');
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkPhone, setCheckPhone] = useState(false)
    const [activeKey, setActiveKey] = useState('general');

    const initialValues = userProfile ? {
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        phoneNumber: userProfile.phoneNumber,
        nickName: userProfile.nickName,
        location: userProfile.location,
        bio: userProfile.bio,
        imageUrl: userProfile?.imageUrl,
        facebook: userProfile.socialLinks?.facebook,
        twitter: userProfile.socialLinks?.twitter,
        instagram: userProfile.socialLinks?.instagram,
        linkedin: userProfile.socialLinks?.linkedin,
        youtube: userProfile.socialLinks?.youtube,
    } : {};
    const userProfileValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string().matches(/^[0-9]+$/, "Phone number must be only digits")
            .min(10, 'Phone number must be at least 10 digits')
            .required('Phone Number is required'),
        nickName: Yup.string().nullable(),
        location: Yup.string().required('Location is required'),
        bio: Yup.string().max(500, 'Bio cannot exceed 500 characters'),
        facebook: Yup.string().url('Please enter a valid URL').nullable(),
        twitter: Yup.string().url('Please enter a valid URL').nullable(),
        instagram: Yup.string().url('Please enter a valid URL').nullable(),
    });
    useEffect(() => {
        console.log("userProfile", userProfile);
        if (userProfileData) {
            const isEmail = userProfile.twoStepVer.byEmail;
            const isPhone = userProfile.twoStepVer.byPhone;
            setCheckEmail(isEmail);
            setCheckPhone(isPhone);
        }

    }, [userProfile]);
    const passwordValidationSchema = Yup.object().shape({
        currentPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Current password is required'),
        newPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('New password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });
    const onSubmitPasswordChange = async (values, { setSubmitting, resetForm }) => {
        try {
            await changePassword({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                confirmPassword: values.confirmPassword,
            }).unwrap();

            toast.success('Password changed successfully');
            resetForm();
        } catch (error) {
            toast.error('Failed to change password');
        } finally {
            setSubmitting(false);
        }
    };
    useEffect(() => {
        if (!selectedFile) {
            setPreviewUrl('');
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(selectedFile);
    }, [selectedFile]);
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const initialPasswordValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    };
    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await updateUserProfile(values).unwrap();
            console.log("Update Response:", response);
            toast.success("Profile updated successfully!");
            resetForm();
        } catch (error) {
            console.error("Update Error:", error);
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setSubmitting(false);
        }
    };
    const updateAuthPhone = async () => {
        let currentVerificationType = 1;
        setVerificationType(currentVerificationType);
        setShowVerificationModal(true);
    };
    const updateAuthEmail = async (e) => {
        e.preventDefault();
        let currentVerificationType = 0;
        const emailUser = userProfile?.email;
        try {
            const payload = {
                emailUser,
                sendOtpToEmail: !checkEmail,
                twoStepVerType: currentVerificationType,
            };
            const response = await twoStepVerification(payload).unwrap();
            console.log('---------------------->>>>>>>>>>', response,);
            if (response.success) {
                console.log("innn show otp modal", showOtpModal);
                setShowOtpModal(() => true);
                console.log("Nowwwwwww otp modal", showOtpModal);
            }
        } catch (error) {
            console.error("Error sending OTP to email:", error);
            toast.error("Failed to send OTP to email.");
        }
    };
    const handlePhoneVerification = async (phone) => {
        setPhoneNumber(phone);
        setShowVerificationModal(false);
        setShowOtpModal(true);
    };
    const handleOtpVerification = async (otp) => {
        const payload = { otp };

        if (verificationType === 0) {
            // Email verification
            payload.value = !checkEmail
        } else {
            // Phone verification
            payload.value = !checkPhone
        }

        try {
            const response = await verifyOtp(payload);
            console.log('--------', response);
            if (response.data.success) {

                setCheckEmail(response.data.user.twoStepVer.byEmail);
                userProfile.twoStepVer.byEmail = response.data.user.twoStepVer.byEmail;
                setCheckPhone(response.data.user.twoStepVer.byPhone);
                userProfile.twoStepVer.byPhone = response.data.user.twoStepVer.byPhone;

            }
        } catch (error) {
            console.error("OTP Verification error:", error);
            toast.error("OTP verification failed.");
        }
    };
    const handleDeleteAccount = async () => {
        Swal.fire({
            title: 'Are you sure you want to delete your account?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await deleteAccount();
                    if (response) {
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("user");
                        navigate('/login');
                        Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
                    }
                } catch (error) {
                    console.error('Error deleting account:', error);
                    Swal.fire('Error!', 'An error occurred while deleting your account.', 'error');
                }
            }
        });
    };
    return (
        <>
            <ToastContainer />
            <div className="chat settings-main pt-2" id="middle">
                <div className="slimscroll">
                    <div className="page-header d-flex align-items-center">
                        <div className="me-3 d-md-block d-lg-none">
                            <a className="text-muted px-0 left_side" href="#">
                                <i className="fas fa-arrow-left"></i>
                            </a>
                        </div>
                        <div>
                            <h5>SETTINGS</h5>
                        </div>
                    </div>

                    <div className="settings-tab my-4">
                        <div className="tab-content settings-form">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={activeKey}
                                onSelect={(k) => setActiveKey(k)}
                                className="mb-3">

                                <Tab eventKey="general" title="General Settings">
                                    <div className="settings-header">
                                        <h5>Account Settings</h5>
                                        <p>Update your account details</p>
                                    </div>
                                    <div className="settings-control p-3">
                                        <div className="form-col form-body">
                                            <Formik
                                                initialValues={initialValues}
                                                onSubmit={onSubmit}
                                                enableReinitialize={true}
                                                validationSchema={userProfileValidationSchema}
                                            >
                                                {({ errors, touched, setFieldValue, handleSubmit, isSubmitting }) => (
                                                    <Form onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            {/* First Name */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <Field name="firstName" type="text" className={`form-control form-control-lg ${errors.firstName && touched.firstName ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            {/* Last Name */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
                                                                    <Field name="lastName" type="text" className={`form-control form-control-lg ${errors.lastName && touched.lastName ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            {/* Phone Number */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Phone Number</label>
                                                                    <Field name="phoneNumber" type="text" className={`form-control form-control-lg ${errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            {/* Nickname */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Nick name <span>(Optional)</span></label>
                                                                    <Field name="nickName" type="text" className="form-control form-control-lg" />
                                                                    {/* No validation schema for nickName assuming it's optional and has no rules */}
                                                                </div>
                                                            </div>

                                                            {/* Profile Picture */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Choose profile picture</label>
                                                                    <div className="custom-input-file form-control form-control-lg">
                                                                        <input
                                                                            id="profilePicture"
                                                                            name="profilePicture"
                                                                            type="file"
                                                                            onChange={(event) => {
                                                                                setFieldValue("profilePicture", event.currentTarget.files[0]);
                                                                                handleImageChange(event);
                                                                            }}
                                                                        />
                                                                        <span className="browse-btn">Browse File</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Location */}
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Location</label>
                                                                    <Field name="location" type="text" className={`form-control form-control-lg ${errors.location && touched.location ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="location" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            {/* Bio */}
                                                            <div className="col-md-12 col-xl-12">
                                                                <div className="form-group">
                                                                    <label>Bio</label>
                                                                    <Field name="bio" as="textarea" className={`form-control form-control-lg ${errors.bio && touched.bio ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="bio" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>
                                                            <div className="social-settings">
                                                                <h4>Social Links</h4>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field name="facebook" type="text" placeholder="Facebook Link" className={`form-control form-control-lg group_formcontrol mb-3 ${errors.facebook && touched.facebook ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="facebook" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field name="twitter" type="text" placeholder="Twitter Link" className={`form-control form-control-lg group_formcontrol mb-3 ${errors.twitter && touched.twitter ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="twitter" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field name="instagram" type="text" placeholder="Instagram Link" className={`form-control form-control-lg group_formcontrol mb-3 ${errors.instagram && touched.instagram ? ' is-invalid' : ''}`} />
                                                                    <ErrorMessage name="instagram" component="div" className="invalid-feedback" />
                                                                </div>
                                                            </div>

                                                            {/* Submit Button */}
                                                            <div className="col-12 text-right">
                                                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Update</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>

                                        </div>
                                        <hr />
                                    </div>
                                    <div className="settings-delete mt-4">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-md-8">
                                                <h5>Delete your account</h5>
                                                <p>Please note, deleting your account is a permanent action and will no be recoverable once completed.</p>
                                            </div>
                                            <div className="col-md-4">
                                                <button onClick={handleDeleteAccount} type="button" className=" btn-delete  mb-0 py-2" data-bs-toggle="modal" data-bs-target="#delete-account">
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="security" title="Security">
                                    <div className="settings-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h5>Change your password</h5>
                                                <p>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
                                            </div>
                                            {/* <div className="col-md-4 text-md-end">
                                                <button className=" logout-btn">Forgot password</button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="security-settings">
                                        <div className="password-updation">
                                            <Formik
                                                initialValues={initialPasswordValues}
                                                validationSchema={passwordValidationSchema}
                                                onSubmit={onSubmitPasswordChange}
                                            >
                                                {({ isSubmitting }) => (
                                                    <Form>
                                                        <div className="security-settings">
                                                            <div className="password-updation">
                                                                <div className="row">
                                                                    <div className="col-xl-4">
                                                                        <div className="form-group">
                                                                            <label>Current password</label>
                                                                            <Field name="currentPassword" type="password" className="form-control" />
                                                                            <ErrorMessage name="currentPassword" component="div" className="text-danger" />
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label>New password</label>
                                                                            <Field name="newPassword" type="password" className="form-control" />
                                                                            <ErrorMessage name="newPassword" component="div" className="text-danger" />
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label>Confirm password</label>
                                                                            <Field name="confirmPassword" type="password" className="form-control" />
                                                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <button type="submit" className="btn-update mb-0 py-2" disabled={isSubmitting}>
                                                                    Update Password
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>

                                        </div>
                                    </div>
                                    {twoStepVerificationFlag &&
                                        <div className="authentication">
                                            <h4 className="auth-title">Two Factor Authentication</h4>
                                            <div>
                                                <input onChange={(e) => updateAuthEmail(e)} type="checkbox" name="sendOtpToEmail" checked={checkEmail} />
                                                <span className="mx-2">Send OTP to Email</span>
                                            </div>
                                            <div>
                                                <input onChange={updateAuthPhone} type="checkbox" name="sendOtpToPhone" checked={checkPhone} />
                                                <span className="mx-2">Send OTP to Phone</span>
                                            </div>
                                            {!checkEmail && checkPhone && (
                                                <h5 className="text-danger">Email not varified</h5>)
                                            } {!checkPhone && checkEmail && (
                                                <h5 className="text-danger">Phone not varified</h5>)
                                            }
                                            {!checkPhone && !checkEmail && (
                                                <span className="text-danger">Both Email and Phone are not varified</span>)
                                            }
                                            {showVerificationModal && verificationType === 1 && (
                                                <VerificationModal
                                                    verificationType={verificationType}
                                                    onClose={() => setShowVerificationModal(false)}
                                                    onSubmit={handlePhoneVerification}
                                                />
                                            )}

                                            {showOtpModal && (
                                                <OtpModal
                                                    onClose={setShowOtpModal(false)}
                                                    onSubmit={handleOtpVerification}
                                                />
                                            )}

                                        </div>
                                    }
                                </Tab>
                            </Tabs>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default UpdateUserInfo
