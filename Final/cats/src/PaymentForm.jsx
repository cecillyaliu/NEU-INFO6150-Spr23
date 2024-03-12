import Button from "./Button";
import { useState, useRef } from 'react'
import './css/Form.css';

function PaymentForm({setClickButton}) {

    const modalRef = useRef();

    const [inputData, setInputData] = useState({
        username: '',
        password: '',
        email: '',
        selectedOption: '',
        billingSameAsShipping: false,
        age: 'Kitty',
        detailedAge: '',
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
        // const { name, value } = e.target;
        // setInputData({
        // ...inputData,
        // [name]: value,
        // });
        const { name, value, type, checked } = e.target;

        setInputData({
        ...inputData,
        [name]: type === 'checkbox' ? checked : value,
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
          errors.username = "Cat's name couldn't be null";
          isValid = false;
        }
    
        if (!inputData.password) {
          errors.password = "Breed couldn't be null";s
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
            selectedOption: '',
            billingSameAsShipping: false,
            age: '',
            detailedAge: '',
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
        }
    };

    const handleCancel = () => {
        setClickButton(false);
    }

    const renderAdditionalField = () => {
        if (inputData.selectedOption === 'other') {
          return (
            <>
                <label id="label-additional" for="input-additional">
                    Please provide details:
                </label>
                <input
                    id="input-additional"
                    type="text"
                    name="additionalField"
                    value={inputData.additionalField || ''}
                    onChange={handleInputChange}
                />
              
            </>
          );
        }
        return null;
    };

    const renderBillingAddressFields = () => {
        if (!inputData.billingSameAsShipping) {
          return (
            <>
                <label id="label-billing-address" for="input-billing-address">
                    Billing Address:
                </label>
                <input
                    id="input-billing-address"
                    type="text"
                    name="billingAddress"
                    value={inputData.billingAddress || ''}
                    onChange={handleInputChange}
                    readOnly
                />
              
            </>
          );
        }
    
        return null;
    };

    const handleMakeChange = (e) => {
        const selectedMake = e.target.value;
    
        setInputData({
          ...inputData,
          age: selectedMake,
          detailedAge: '',
        });
    };

    return (
        <div className="form-page-container">
            <form className="form-container" onSubmit={handleSubmit}>
                <label id="label-username" for="input-username">
                    Cat's name:
                </label>
                    <input
                    id = "input-username"
                    name="username"
                    value={inputData.username  || ''}
                    onChange={handleInputChange}
                    />
                    <div className="error-message-username">{inputErrors.username}</div>
                
                <br/>
                <label id="label-password" for="input-password">
                    Breed:
                </label>
                    <input
                    id = "input-password"
                    name="password"
                    value={inputData.password || ''}
                    onChange={handleInputChange}
                    />
                    <div className="error-message-password">{inputErrors.password}</div>
                
                <br/>
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
                
                <br/>
                <label id="label-select" for="select-color">
                    Select an Color:
                </label>
                <select
                    id="select-color"
                    name="selectedOption"
                    value={inputData.selectedOption}
                    onChange={handleInputChange}>
                    <option value="option1">White</option>
                    <option value="option2">Brown and yellow</option>
                    <option value="option3">Brown</option>
                    <option value="option4">Black</option>
                    <option value="other">Other</option>
                </select>
                {renderAdditionalField()}
                <label id="label-shipping-address" for="input-shipping-address">
                    Shipping Address:
                </label>
                <input
                    id="input-shipping-address"
                    type="text"
                    name="shippingAddress"
                    value={inputData.shippingAddress || ''}
                    onChange={handleInputChange}
                />

                {renderBillingAddressFields()}

                <label id="label-checkbox-billing-address" for="input-billing-address">
                    Billing Address Same as Shipping Address:
                </label>
                <input
                    id="checkbox-billing-address"
                    type="checkbox"
                    name="billingSameAsShipping"
                    checked={inputData.billingSameAsShipping}
                    onChange={handleInputChange}
                />


                <label id="label-select-age" for="select-age">
                    Age:
                </label>
                <select
                    id="select-age"
                    name="age"
                    value={inputData.age}
                    onChange={handleMakeChange}>
                    <option value="Kitty">Kitty</option>
                    <option value="Adult">Adult</option>
                </select>

                <label id="label-select-detailed-age" for="select-detailed-age">
                    Detailed Age:
                </label>
                <select
                    id="select-detailed-age"
                    name="detailed-age"
                    value={inputData.detailedAge}
                    onChange={handleInputChange}>
                    {inputData.age === 'Kitty' && (
                    <>
                        <option value="up">0-5 months</option>
                        <option value="down">6-12 months</option>
                    </>
                    )}
                    {inputData.age === 'Adult' && (
                    <>
                        <option value="up">1-3 years</option>
                        <option value="down">older than 4 years</option>
                    </>
                    )}
                </select>

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

export default PaymentForm;