import Button from "./Button";
import { useState, useRef } from 'react'
import './css/Form.css';

function Form({setClickButton}) {

    const modalRef = useRef();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleRegister = () => {
        modalRef.current.close();
        setFormData({
            username: '',
            password: '',
            email: '',
        });
    };

    const handleConfirm = () => {
        modalRef.current.showModal();
    };

    const handleCancel = () => {
        setClickButton(false);
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                    name="username"
                    value={formData.username  || ''}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    name="password"
                    value={formData.password || ''}
                    onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                    />
                </label>
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
                    onClick={handleRegister}
                    children="OK"
                    className="ok"
                    visual="button"/>
            </dialog>
        </div>

    )
}

export default Form;