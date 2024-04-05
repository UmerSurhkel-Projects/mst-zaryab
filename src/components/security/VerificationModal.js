import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTwoStepVerificationMutation } from '../../api/AuthApi';
import './modal.css';

const VerificationModal = ({ onSubmit, onClose, verificationType }) => {
    const [twoStepVerification] = useTwoStepVerificationMutation();
    const initialFormValues = {
        phone: verificationType === 1 ? '' : undefined,
        email: verificationType === 0 ? '' : undefined,
        twoStepVerType: verificationType,
    };

    const verificationSchema = Yup.object().shape({
        phone: Yup.string()
            .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number format")
            .when("twoStepVerType", (twoStepVerType, schema) =>
                twoStepVerType === 1 ? schema.required("Phone number is required") : schema
            ),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        const payload = values.twoStepVerType === 1 ? { phone: values.phone } : { email: values.email };
        payload.twoStepVerType = values.twoStepVerType;

        try {
            const response = await twoStepVerification(payload).unwrap();
            if (response.success) {
                onSubmit(values.twoStepVerType === 1 ? values.phone : values.email);
            }
        } catch (error) {
            console.error("Verification error:", error);
        }
        setSubmitting(false);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-overlay security-modal ">
                <div className="modal-content">
                    <h2>{verificationType === 1 ? 'Phone Verification' : 'Email Verification'}</h2>
                    <Formik
                        initialValues={initialFormValues}
                        validationSchema={verificationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                {verificationType === 1 && (
                                    <>
                                        <Field name="phone" className="phone-input" type="tel" placeholder="Enter your phone number" />
                                        <ErrorMessage name="phone" component="div" className="error-message" />
                                    </>
                                )}
                                <div className="modal-actions">
                                    <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
                                        {verificationType === 1 ? 'Send Code to Phone' : ''}
                                    </button>
                                    <button type="button" onClick={onClose} className="modal-close-btn">
                                        Cancel
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default VerificationModal;
