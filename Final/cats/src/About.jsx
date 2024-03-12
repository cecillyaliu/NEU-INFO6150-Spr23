import './css/Policy.css'
import Button from './Button';
import { useState } from 'react';
import PaymentForm from './PaymentForm';

function About() {
  const [clickButton, setClickButton] = useState(false);

  const handleButtonClick = () => {
    setClickButton(true);
  }



  return (
    <>
    {clickButton ?
      <PaymentForm setClickButton={setClickButton}/> : 
      <>
        <div className="policy-container">
          <p className="policy-text-top">At our website, we prioritize the privacy and security of our users. This Privacy Policy outlines the information we collect, how we use it, and the measures we take to safeguard your data.</p>
          <Button children={"Payment Information"} 
            onClick={handleButtonClick} 
            type={"button"} 
            visual={"button"}
            className={"cards_button"}
          />
          <p className="policy-title">1. Collection of Personal Information:</p>
          <p className="policy-text">When you visit our website, we may collect personal information such as your name, email address, and location. This information is gathered for user account creation, personalized experiences, and to communicate important updates.</p>
          <p className="policy-title">2. Usage of Cookies:</p>
          <p className="policy-text">To enhance your browsing experience, we uses cookies. These small text files are stored on your device to remember preferences, analyze site traffic, and provide tailored content. You can manage cookie preferences through your browser settings.</p>
          <p className="policy-title">3. Information Security:</p>
          <p className="policy-text">We employs industry-standard security measures to protect your personal information. We use encryption technologies, secure protocols, and regularly update our security protocols to ensure data integrity and prevent unauthorized access.</p>
          <p className="policy-title">4. Third-Party Services:</p>
          <p className="policy-text">We may utilize third-party services such as analytics tools to better understand user behavior and improve our website. These services may have their privacy policies, and users are encouraged to review them for a comprehensive understanding of data handling.</p>
          <p className="policy-title">5. Data Retention and Deletion:</p>
          <p className="policy-text">We retain user data only for as long as necessary to provide services and fulfill the purposes outlined in this Privacy Policy. Users can request the deletion of their accounts and associated data by contacting our support team.</p>
          <p className="policy-text-bottom">By using our website, you agree to the terms outlined in this Privacy Policy. We reserve the right to update this policy periodically, and users will be notified of any significant changes. For questions or concerns about your privacy, please contact our support team at cecillyaliu@gmail.com.</p>
          <p className="policy-text">Thank you for choosing our website, where your love for cats meets a secure and enjoyable online experience.</p>
        </div>
      </>
    }
      
    </>
  )
}

export default About;
