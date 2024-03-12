import Button from "./Button";
import { useState, useRef } from 'react'
import './css/Form.css';

function Form({setClickButton}) {

    const modalRef = useRef();

    const [inputData, setInputData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const [inputErrors, setInputErrors] = useState({
        username: '',
        password: '',
        email: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({
        ...inputData,
        [name]: value,
        });

        setInputErrors({
            ...inputErrors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};
    
        if (!inputData.username) {
          errors.username = "Username couldn't be null";
          isValid = false;
        }
    
        if (!inputData.password) {
          errors.password = "Password couldn't be null";
          isValid = false;
        }
    
        if (!inputData.email) {
          errors.email = "Email couldn't be null";
          isValid = false;
        } else if (!inputData.email.includes('@')) {
          errors.email = "Please enter a valid email address with '@'";
          isValid = false;
        }
    
        setInputErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const handleOk = () => {
        modalRef.current.close();
        setInputData({
            username: '',
            password: '',
            email: '',
        });
    };

    const handleConfirm = () => {
        if (validateForm()) {
            setFormData({
              username: inputData.username,
              password: inputData.password,
              email: inputData.email,
            });
            modalRef.current.showModal();
            setUsername(inputData.username);
        }
    };

    const handleCancel = () => {
        setClickButton(false);
    }
    return (
        <div className="form-page-container">
            <div className="information-container">
                <p>Your registration information:</p>
                <ul>
                    <li>Username: {formData.username}</li>
                    <li>Email: {formData.email}</li>
                </ul>
            </div>
        
            <form className="form-container" onSubmit={handleSubmit}>
                <label id="label-username" for="input-username">
                    Username:
                </label>
                    <input
                    id = "input-username"
                    name="username"
                    value={inputData.username  || ''}
                    onChange={handleInputChange}
                    />
                    <div className="error-message-username">{inputErrors.username}</div>
                
                <br />
                <label id="label-password" for="input-password">
                    Password:
                </label>
                    <input
                    id = "input-password"
                    name="password"
                    value={inputData.password || ''}
                    onChange={handleInputChange}
                    />
                    <div className="error-message-password">{inputErrors.password}</div>
                <br />
                <label id="label-email" for="input-email">
                    Email:
                </label>
                    <input
                    id = "input-email"
                        name="email"
                        value={inputData.email || ''}
                        onChange={handleInputChange}
                    />
                    <div className="error-message-email">{inputErrors.email}</div>
                <br />
                <Button
                    type="submit"
                    onClick={handleConfirm}
                    children="Confirm"
                    className="confirm"
                    visual="link"/>
                <Button
                    type="button"
                    onClick={handleCancel}
                    children="Cancel"
                    className="cancel"
                    visual="link"/>

            </form>
            <dialog ref={modalRef}>
                Register successful!
                <Button
                    type="button"
                    onClick={handleOk}
                    children="OK"
                    className="ok"
                    visual="button"/>
            </dialog>
        </div>

    )
}

export default Form;