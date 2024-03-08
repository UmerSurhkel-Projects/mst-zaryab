import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useUpdateUserProfileMutation, useGetUserProfileQuery } from '../../api/UserApi';
import { useChangePasswordMutation, useVerifyOtpMutation, useTwoStepVerificationMutation, useDeleteAccountMutation } from '../../api/AuthApi';
import { useNavigate, Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import VerificationModal from '../security/VerificationModal';
import OtpModal from '../security/OtpModal';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';


const UpdateUserInfo = () => {
    const [twoStepVerification] = useTwoStepVerificationMutation();
    const [updateUserProfile, { isSuccess }] = useUpdateUserProfileMutation();
    const { data } = useGetUserProfileQuery();
    const [changePassword, { data: changePasswordData, isSuccess: isPasswordChangeSuccess, error: changePasswordError }] = useChangePasswordMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [deleteAccount] = useDeleteAccountMutation();
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationType, setVerificationType] = useState(null);
    const userProfile = data?.user;
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(userProfile?.imageUrl || '');
    const [initialTwoFactorAuthenticationValues, setInitialTwoFactorAuthenticationValues] = useState({
        sendOtpToEmail: localStorage.getItem('twoFactorAuthentication') === 'email',
        sendOtpToPhone: localStorage.getItem('twoFactorAuthentication') === 'phone',
        verified: false,
    });

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
        } catch (error) {
            console.error("Update Error:", error);
            alert(error.message || 'Failed to update profile');
        } finally {
            setSubmitting(false);
        }
    };
    const handleTwoFactorSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        let currentVerificationType = null;
        if (values.sendOtpToPhone) {
            currentVerificationType = 1; // For phone verification
        } else if (values.sendOtpToEmail) {
            currentVerificationType = 0;
            // Assuming your verifyOtp API needs an email address and you have it available
            const emailUser = userProfile?.email; // Or however you access the user's email

            try {
                const payload = {
                    emailUser,
                    sendOtpToEmail: values.sendOtpToEmail,
                    twoStepVerType: currentVerificationType,
                };
                const response = await twoStepVerification(payload).unwrap();
                console.log(response, "response of verify otp");
                // Handle successful OTP request (maybe show a notification or proceed directly)
                toast("OTP sent to email. Please verify.");
                setShowOtpModal(true); // Show the OTP modal if you want user to enter OTP
            } catch (error) {
                console.error("Error sending OTP to email:", error);
                // Handle error (e.g., show an error notification)
                toast.error("Failed to send OTP to email.");
            }
        }

        if (currentVerificationType !== null) {
            setVerificationType(currentVerificationType);
            setShowVerificationModal(true);
        }

        localStorage.setItem("twoFactorAuthentication", currentVerificationType === 1 ? "phone" : "email");
        setSubmitting(false);
    };
    const handlePhoneVerification = async (phone) => {
        setPhoneNumber(phone);
        setShowVerificationModal(false);
        setShowOtpModal(true);
    };
    const handleOtpVerification = async (otp) => {
        setShowOtpModal(false);
        const payload = { otp };

        if (verificationType === 0) {
            // Email verification
            payload.value = true;
        } else {
            // Phone verification
            payload.value = true;
        }

        try {
            await verifyOtp(payload);

            // Set the verified property to true
            setInitialTwoFactorAuthenticationValues({
                ...initialTwoFactorAuthenticationValues,
                verified: true,
            });
        } catch (error) {
            console.error("OTP Verification error:", error);
            // Handle error (e.g., show an error notification)
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
                            <p>Last Update your profile: 29 Aug 2020</p>
                        </div>
                    </div>

                    <div className="settings-tab my-4">
                        <div className="tab-content settings-form">
                            <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className="mb-3">

                                <Tab eventKey="general" title="General Settings">

                                    <div className="settings-header">
                                        <h5>Account Settings</h5>
                                        <p>Update your account details</p>
                                    </div>
                                    <div className="settings-control p-3">
                                        <div className="form-col form-body">
                                            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
                                                {({ setFieldValue }) => (
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <Field name="firstName" type="text" className={`form-control form-control-lg group_formcontrol`} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
                                                                    <Field name="lastName" type="text" className={`form-control form-control-lg group_formcontrol `} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Phone Number</label>
                                                                    <Field name="phoneNumber" type="text" className={`form-control form-control-lg group_formcontrol `} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Nick name <span>(Optional)</span></label>
                                                                    <Field name="nickName" type="text" className="form-control form-control-lg group_formcontrol" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Choose profile picture</label>
                                                                    <div className="custom-input-file form-control form-control-lg group_formcontrol">
                                                                        <input id="profilePicture" name="profilePicture" type="file" onChange={handleImageChange} />
                                                                        <span className="browse-btn">Browse File</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <label>Location</label>
                                                                    <Field name="location" type="text" className={`form-control form-control-lg group_formcontrol`} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-xl-12">
                                                                <div className="form-group">
                                                                    <label>Bio</label>
                                                                    <Field name="bio" as="textarea" className="form-control form-control-lg group_formcontrol" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 text-right">
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                        <hr />
                                        <div className="social-settings">
                                            <h4>Social Links</h4>
                                            <div className="form-col form-body">
                                                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field className="form-control form-control-lg group_formcontrol mb-3" name="facebook" type="text" placeholder="Facebook Link" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field className="form-control form-control-lg group_formcontrol mb-3" name="twitter" type="text" placeholder="Twitter Link" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-xl-4">
                                                                <div className="form-group">
                                                                    <Field className="form-control form-control-lg group_formcontrol mb-3" name="instagram" type="text" placeholder="Instagram Link" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row profile_form m-0 align-items-center">
                                                            <div className="me-4">
                                                                <button type="submit" className="btn-update py-2">
                                                                    Update Details
                                                                </button>
                                                            </div>
                                                            <div className="cancel-btn">
                                                                <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
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
                                            <div className="col-md-4 text-md-end">
                                                <button className=" logout-btn">Forgot password</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="security-settings">
                                        <div className="password-updation">
                                            <Formik
                                                initialValues={initialPasswordValues}
                                                onSubmit={async (values, { setSubmitting }) => {
                                                    // Implement the password change logic here.
                                                    await changePassword({
                                                        currentPassword: values.currentPassword,
                                                        newPassword: values.newPassword,
                                                        confirmPassword: values.confirmPassword,
                                                    });
                                                    if (isPasswordChangeSuccess) {
                                                        alert('Password changed successfully');
                                                    }
                                                    setSubmitting(false);
                                                }}
                                            >
                                                {({ isSubmitting }) => (
                                                    <Form>
                                                        <div className="security-settings">
                                                            <div className="password-updation">
                                                                <div className="row">
                                                                    <div className="col-xl-4">
                                                                        <div className="form-col form-body">
                                                                            <div className="form-group">
                                                                                <label>Current password</label>
                                                                                <Field name="currentPassword" type="password" className="form-control form-control-lg group_formcontrol" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label>New password</label>
                                                                                <Field name="newPassword" type="password" className="form-control form-control-lg group_formcontrol" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label>Confirm password</label>
                                                                                <Field name="confirmPassword" type="password" className="form-control form-control-lg group_formcontrol" />
                                                                            </div>
                                                                            <div className="form-row profile_form m-0 align-items-center">
                                                                                <div className="me-4">
                                                                                    <button type="submit" className="btn-update mb-0 py-2" disabled={isSubmitting}>
                                                                                        Update Password
                                                                                    </button>
                                                                                </div>
                                                                                <div className="cancel-btn">
                                                                                    <a href="#" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-8">
                                                                        <div className="requirement-card">
                                                                            <h4>Password requirements</h4>
                                                                            <p className="py-3 mb-0">To create a new password, you have to meet all of the following requirements:</p>
                                                                            <div className="requirements-list">
                                                                                <p>Minimum 8 characters</p>
                                                                                <p>At least one special character</p>
                                                                                <p>At least one number</p>
                                                                                <p>Can’t be the same as a previous password</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <hr />

                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>

                                        </div>
                                    </div>
                                    <div className="authentication">
                                        <h4 className="auth-title">Two Factor Authentication</h4>
                                        <Formik
                                            initialValues={initialTwoFactorAuthenticationValues}
                                            onSubmit={handleTwoFactorSubmit}
                                        >
                                            {({ isSubmitting }) => (
                                                <Form>
                                                    <div className="form-group">
                                                        <Field type="checkbox" name="sendOtpToEmail" />
                                                        <span className="mx-2">Send OTP to Email</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <Field type="checkbox" name="sendOtpToPhone" />
                                                        <span className="mx-2">Send OTP to Phone</span>
                                                    </div>
                                                    {verificationType === null && (
                                                        <div>
                                                            <h4>Both phone and email verification methods are enabled for your account.</h4>
                                                        </div>
                                                    )}
                                                    {verificationType !== null && !initialTwoFactorAuthenticationValues.verified && (
                                                        <div>
                                                            <h4>You have not verified your {verificationType === 0 ? "email" : "phone number"}.</h4>
                                                            <button type="submit" className="btn-update mb-0 py-2" disabled={isSubmitting}>
                                                                Verify
                                                            </button>
                                                        </div>
                                                    )}
                                                    {verificationType !== null && initialTwoFactorAuthenticationValues.verified && (
                                                        <div>
                                                            <h4>Verified</h4>
                                                        </div>
                                                    )}
                                                </Form>
                                            )}
                                        </Formik>

                                        {/* Modals */}
                                        {showVerificationModal && verificationType === 1 && (
                                            <VerificationModal
                                                verificationType={verificationType}
                                                onClose={() => setShowVerificationModal(false)}
                                                onSubmit={handlePhoneVerification} // Make sure to adjust this to handle both phone and email verification results accordingly
                                            />
                                        )}

                                        {showOtpModal && (
                                            <OtpModal
                                                onClose={() => setShowOtpModal(false)}
                                                onSubmit={handleOtpVerification}
                                            />
                                        )}

                                    </div>
                                </Tab>

                                {/* <Tab eventKey="notifications" title="Notifications">
                                    <div className="settings-header">
                                        <h5>Notifications</h5>
                                        <p>Update your account Notifications</p>
                                    </div>
                                    <div className="settings-control full-options">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" checked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Allow mobile notifications</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" checked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Notifications from your friends</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Send notifications by email</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" checked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Allow connected contacts</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" checked="" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Confirm message requests</span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <label className="switch me-3">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
                                                <div>
                                                    <span>Profile privacy</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab eventKey="history" title="History">
                                    <div className="settings-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h5>Device History</h5>
                                                <p>If you see a device here that you believe wasn’t you, please contact our account fraud department immediately.</p>
                                            </div>
                                            <div className="col-md-4 text-md-end">
                                                <button className=" logout-btn">Log out all Devices</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logged-devices-settings">
                                        <div className="logged-device align-items-center d-flex">
                                            <div className="device-details">
                                                <h5>IPhone 11</h5>
                                                <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                            </div>
                                            <div className="logged-btn ms-auto">
                                                <a href="#">Sign Out</a>
                                            </div>
                                        </div>
                                        <div className="logged-device align-items-center d-flex">
                                            <div className="device-details">
                                                <h5>IMac OSX · Safari 10.2</h5>
                                                <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                            </div>
                                            <div className="logged-btn ms-auto">
                                                <a href="#">Sign Out</a>
                                            </div>
                                        </div>
                                        <div className="logged-device align-items-center d-flex">
                                            <div className="device-details">
                                                <h5>HP Laptop Win10</h5>
                                                <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                            </div>
                                            <div className="logged-btn ms-auto">
                                                <a href="#">Sign Out</a>
                                            </div>
                                        </div>
                                        <div className="logged-device align-items-center d-flex">
                                            <div className="device-details">
                                                <h5>IMac OSX · Edge browser</h5>
                                                <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                            </div>
                                            <div className="logged-btn ms-auto">
                                                <a href="#">Sign Out</a>
                                            </div>
                                        </div>
                                    </div>
                                </Tab> */}
                            </Tabs>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default UpdateUserInfo
