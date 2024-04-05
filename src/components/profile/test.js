// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUpdateUserProfileMutation, useGetUserProfileQuery } from '../../api/UserApi';
// import { useChangePasswordMutation, useVerifyOtpMutation, useTwoStepVerificationMutation, useDeleteAccountMutation } from '../../api/AuthApi';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Tab, Tabs } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import Swal from 'sweetalert2';
// import VerificationModal from '../security/VerificationModal';
// import OtpModal from '../security/OtpModal';

// const initialPasswordValues = {
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
// };

// const UpdateUserInfo = ({ twoStepVerificationFlag }) => {
//     const { data: { user: userProfile } = {} } = useGetUserProfileQuery();
//     const [showVerificationModal, setShowVerificationModal] = useState(false);
//     const [showOtpModal, setShowOtpModal] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [verificationType, setVerificationType] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewUrl, setPreviewUrl] = useState(userProfile?.imageUrl || '');
//     const [checkEmail, setCheckEmail] = useState(userProfile?.twoStepVer?.byEmail || false);
//     const [checkPhone, setCheckPhone] = useState(userProfile?.twoStepVer?.byPhone || false);
//     const [activeKey, setActiveKey] = useState('security');
//     const navigate = useNavigate();
//     const [twoStepVerification] = useTwoStepVerificationMutation();
//     const [updateUserProfile, { isSuccess }] = useUpdateUserProfileMutation();
//     const [changePassword, { data: changePasswordData, isSuccess: isPasswordChangeSuccess, error: changePasswordError }] = useChangePasswordMutation();
//     const [verifyOtp] = useVerifyOtpMutation();
//     const [deleteAccount] = useDeleteAccountMutation();

//     const initialValues = userProfile ? {
//         firstName: userProfile.firstName,
//         lastName: userProfile.lastName,
//         phoneNumber: userProfile.phoneNumber,
//         nickName: userProfile.nickName,
//         location: userProfile.location,
//         bio: userProfile.bio,
//         imageUrl: userProfile?.imageUrl,
//         facebook: userProfile.socialLinks?.facebook,
//         twitter: userProfile.socialLinks?.twitter,
//         instagram: userProfile.socialLinks?.instagram,
//         linkedin: userProfile.socialLinks?.linkedin,
//         youtube: userProfile.socialLinks?.youtube,
//     } : {};
//     const userProfileValidationSchema = Yup.object().shape({
//         firstName: Yup.string().required('First Name is required'),
//         lastName: Yup.string().required('Last Name is required'),
//         phoneNumber: Yup.string().matches(/^[0-9]+$/, "Phone number must be only digits")
//             .min(10, 'Phone number must be at least 10 digits')
//             .required('Phone Number is required'),
//         nickName: Yup.string().nullable(),
//         location: Yup.string().required('Location is required'),
//         bio: Yup.string().max(500, 'Bio cannot exceed 500 characters'),
//         facebook: Yup.string().url('Please enter a valid URL').nullable(),
//         twitter: Yup.string().url('Please enter a valid URL').nullable(),
//         instagram: Yup.string().url('Please enter a valid URL').nullable(),
//     });
//     const passwordValidationSchema = Yup.object().shape({
//         currentPassword: Yup.string()
//             .min(6, 'Password must be at least 6 characters')
//             .required('Current password is required'),
//         newPassword: Yup.string()
//             .min(6, 'Password must be at least 6 characters')
//             .required('New password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
//             .required('Confirm password is required'),
//     });
//     const onSubmitPasswordChange = async (values, { setSubmitting, resetForm }) => {
//         try {
//             await changePassword({
//                 currentPassword: values.currentPassword,
//                 newPassword: values.newPassword,
//                 confirmPassword: values.confirmPassword,
//             }).unwrap();

//             toast.success('Password changed successfully');
//             resetForm();
//         } catch (error) {
//             toast.error('Failed to change password');
//         } finally {
//             setSubmitting(false);
//         }
//     };
//     // useEffect(() => {
//     //     if (!selectedFile) {
//     //         setPreviewUrl('');
//     //         return;
//     //     }
//     //     const fileReader = new FileReader();
//     //     fileReader.onload = () => {
//     //         setPreviewUrl(fileReader.result);
//     //     };
//     //     fileReader.readAsDataURL(selectedFile);
//     // }, [selectedFile]);
//     const handleImageChange = (event) => {
//         if (event.target.files && event.target.files.length > 0) {
//             setSelectedFile(event.target.files[0]);
//         }
//     };
//     const updateAuthPhone = async () => {
//         let currentVerificationType = 1;
//         setVerificationType(currentVerificationType);
//         setShowVerificationModal(true);
//     };
//     const updateAuthEmail = async () => {
//         let currentVerificationType = 0;
//         const emailUser = userProfile?.email;
//         try {
//             const payload = {
//                 emailUser,
//                 sendOtpToEmail: !checkEmail,
//                 twoStepVerType: currentVerificationType,
//             };
//             const response = await twoStepVerification(payload).unwrap();
//             console.log('---------------------->>>>>>>>>>', response,);
//             if (response.success) {
//                 setShowOtpModal(true);
//             }
//         } catch (error) {
//             console.error("Error sending OTP to email:", error);
//             toast.error("Failed to send OTP to email.");
//         }

//     };
//     const handlePhoneVerification = async (phone) => {
//         setPhoneNumber(phone);
//         setShowVerificationModal(false);
//         setShowOtpModal(true);
//     };
//     const handleOtpVerification = async (otp) => {
//         const payload = { otp };

//         if (verificationType === 0) {
//             // Email verification
//             payload.value = !checkEmail
//         } else {
//             // Phone verification
//             payload.value = !checkPhone
//         }

//         try {
//             const response = await verifyOtp(payload);
//             console.log('--------', response);
//             if (response.data.success) {

//                 setCheckEmail(response.data.user.twoStepVer.byEmail);
//                 userProfile.twoStepVer.byEmail = response.data.user.twoStepVer.byEmail;
//                 setCheckPhone(response.data.user.twoStepVer.byPhone);
//                 userProfile.twoStepVer.byPhone = response.data.user.twoStepVer.byPhone;

//             }
//         } catch (error) {
//             console.error("OTP Verification error:", error);
//             toast.error("OTP verification failed.");
//         }
//     };
//     const handleDeleteAccount = async () => {
//         Swal.fire({
//             title: 'Are you sure you want to delete your account?',
//             text: 'This action cannot be undone!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!',
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     const response = await deleteAccount();
//                     if (response) {
//                         localStorage.removeItem("accessToken");
//                         localStorage.removeItem("user");
//                         navigate('/login');
//                         Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
//                     }
//                 } catch (error) {
//                     console.error('Error deleting account:', error);
//                     Swal.fire('Error!', 'An error occurred while deleting your account.', 'error');
//                 }
//             }
//         });
//     };

//     const handleEmailCheckboxChange = async (event) => {
//         const shouldSendOtp = event.target.checked;
//         setCheckEmail(shouldSendOtp); // Optimistically update UI if needed

//         // Call your method conditionally or adjust its logic based on 'shouldSendOtp'
//         if (shouldSendOtp) {
//             await updateAuthEmail();
//         } else {
//             // Handle the case where OTP should not be sent (if applicable)
//         }
//     }
//     const handleTest = () => {
//         setShowOtpModal(prev => !prev);
//         console.log('Here in handle Test: ', showOtpModal);
//     };

//     return (
//         <>
//             <ToastContainer />
//             <div className="chat settings-main pt-2" id="middle">
//                 <div className="slimscroll">
//                     <div className="page-header d-flex align-items-center">
//                         <div className="me-3 d-md-block d-lg-none">
//                             <a className="text-muted px-0 left_side" href="#">
//                                 <i className="fas fa-arrow-left"></i>
//                             </a>
//                         </div>
//                         <div>
//                             <h5>SETTINGS</h5>
//                         </div>
//                     </div>

//                     <div className="settings-tab my-4">
//                         <div className="tab-content settings-form">
//                             <Tabs
//                                 id="controlled-tab-example"
//                                 activeKey={activeKey}
//                                 onSelect={(k) => setActiveKey(k)}
//                                 className="mb-3">
//                                 <Tab eventKey="security" title="Security">
//                                     {/* <div className="settings-header">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-8">
//                                                 <h5>Change your password</h5>
//                                                 <p>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="security-settings">
//                                         <div className="password-updation">
//                                             <Formik
//                                                 initialValues={initialPasswordValues}
//                                                 validationSchema={passwordValidationSchema}
//                                                 onSubmit={onSubmitPasswordChange}
//                                             >
//                                                 {({ isSubmitting }) => (
//                                                     <Form>
//                                                         <div className="security-settings">
//                                                             <div className="password-updation">
//                                                                 <div className="row">
//                                                                     <div className="col-xl-4">
//                                                                         <div className="form-group">
//                                                                             <label>Current password</label>
//                                                                             <Field name="currentPassword" type="password" className="form-control" />
//                                                                             <ErrorMessage name="currentPassword" component="div" className="text-danger" />
//                                                                         </div>

//                                                                         <div className="form-group">
//                                                                             <label>New password</label>
//                                                                             <Field name="newPassword" type="password" className="form-control" />
//                                                                             <ErrorMessage name="newPassword" component="div" className="text-danger" />
//                                                                         </div>

//                                                                         <div className="form-group">
//                                                                             <label>Confirm password</label>
//                                                                             <Field name="confirmPassword" type="password" className="form-control" />
//                                                                             <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>

//                                                                 <button type="submit" className="btn-update mb-0 py-2" disabled={isSubmitting}>
//                                                                     Update Password
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </Form>
//                                                 )}
//                                             </Formik>
//                                         </div>
//                                     </div> */}
//                                     {
//                                         // twoStepVerificationFlag &&
//                                         <div className="authentication">
//                                             <h4 className="auth-title">Two Factor Authentication</h4>
//                                             <div>
//                                                 <input onChange={handleEmailCheckboxChange} type="checkbox" name="sendOtpToEmail" checked={checkEmail} />
//                                                 <span className="mx-2">Send OTP to Email</span>
//                                             </div>
//                                             <div>
//                                                 <input onChange={updateAuthPhone} type="checkbox" name="sendOtpToPhone" checked={checkPhone} />
//                                                 <span className="mx-2">Send OTP to Phone</span>
//                                             </div>
//                                             {!checkEmail && (
//                                                 <span className="mx-2">Email not verified</span>)
//                                             } {!checkPhone && (
//                                                 <span className="mx-2">Phone not verified</span>)
//                                             }
//                                             {showVerificationModal && verificationType === 1 && (
//                                                 <VerificationModal
//                                                     verificationType={verificationType}
//                                                     onClose={() => setShowVerificationModal(false)}
//                                                     onSubmit={handlePhoneVerification}
//                                                 />
//                                             )}

//                                             {showOtpModal && (
//                                                 <OtpModal
//                                                 // onClose={setShowOtpModal(false)}
//                                                 // onSubmit={handleOtpVerification}
//                                                 />
//                                             )}
//                                         </div>
//                                     }
//                                 </Tab>
//                             </Tabs>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UpdateUserInfo;