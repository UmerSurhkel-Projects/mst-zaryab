import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const otpSchema = Yup.object().shape({
    otp: Yup.string()
        .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
        .required('OTP is required'),
});

const OtpModal = ({ onSubmit, onClose }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        onSubmit(values.otp, { value: true });
        setSubmitting(false);
    };

    return (
        <div className="modal-overlay security-modal ">
            <div className="modal-content">
                <h2>OTP Verification</h2>
                <Formik
                    initialValues={{ otp: '', value: '' }}
                    validationSchema={otpSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                name="otp"
                                type="text"
                                placeholder="Enter OTP"
                                maxLength="6"
                                className="phone-input"
                            />
                            <ErrorMessage name="otp" component="div" className="error-message" />
                            <div className="modal-actions">
                                <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>Verify</button>
                                <button type="button" onClick={onClose} className="modal-close-btn">Cancel</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default OtpModal;
