// actions => auth.js file
import { ActionTypes } from '../types'
import { ENV } from '../config/config';
const {baseUrl} = ENV;

// Action Creators for Registration
const registerStart = () => ({ type: ActionTypes.REGISTER_START });
const registerSuccess = (userData) => ({ type: ActionTypes.REGISTER_SUCCESS, payload: userData });
const registerFail = (error) => ({ type: ActionTypes.REGISTER_FAIL, payload: error });

//  Action Creators for Login
const loginStart = () => ({ type: ActionTypes.LOGIN_START });
const loginSuccess = (userData) => ({ type: ActionTypes.LOGIN_SUCCESS, payload: userData });
const loginFail = (error) => ({ type: ActionTypes.LOGIN_FAIL, payload: error });


// Asynchronous Action Handler for Registration
const registrationAction = async (formData, dispatch) => {
    dispatch(registerStart());

    try {
        const response = await fetch(`${baseUrl}/v1/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            dispatch(registerSuccess(data.user));
        } else {
            throw new Error(data.message || 'Failed to register');
        }
    } catch (error) {
        dispatch(registerFail(error.message));
    }
};

// Asynchronous Action Handler for Login
const loginAction = (formData) => async (dispatch) => {
    dispatch(loginStart());

    try {
        const response = await fetch(`${baseUrl}/v1/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            dispatch(loginSuccess(data));
        } else {
            throw new Error(data.message || 'Failed to login');
        }
    } catch (error) {
        dispatch(loginFail(error.message));
    }
};


export { registrationAction, loginAction };
