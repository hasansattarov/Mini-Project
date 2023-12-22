import "./IntakeForm.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const IntakeForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantGivenName: '',
    applicantMiddleName: '',
    applicantFamilyName: '',
    creditGivenName: '',
    creditMiddleName: '',
    creditFamilyName: '',
    streetNumName: '',
    city: '',
    state: '',
    zip: '',
    phoneNum: '',
    email: '',
    creditCardNum: '',
    creditExpiration: '',
    cardType: '',
    paymentAmount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    navigate('/review', { state: { formData } });
  };

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <div className="intake-form-row">
        <div className="intake-form-column">
          <h2>Applicant Information</h2>
          <div>
            <label htmlFor="applicantGivenName">Given Name (First Name):</label>
            <input
              type="text"
              id="applicantGivenName"
              name="applicantGivenName"
              value={formData.applicantGivenName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="applicantMiddleName">Middle Name (if any):</label>
            <input
              type="text"
              id="applicantMiddleName"
              name="applicantMiddleName"
              value={formData.applicantMiddleName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="applicantFamilyName">Family Name (Last Name):</label>
            <input
              type="text"
              id="applicantFamilyName"
              name="applicantFamilyName"
              value={formData.applicantFamilyName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="intake-form-column">
          <div>
            <h2>Credit Card Information</h2>
            <label htmlFor="creditGivenName">Given Name (First Name):</label>
            <input
              type="text"
              id="creditGivenName"
              name="creditGivenName"
              value={formData.creditGivenName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="creditMiddleName">Middle Name (if any):</label>
            <input
              type="text"
              id="creditMiddleName"
              name="creditMiddleName"
              value={formData.creditMiddleName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="creditFamilyName">Family Name (Last Name):</label>
            <input
              type="text"
              id="creditFamilyName"
              name="creditFamilyName"
              value={formData.creditFamilyName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      {/* Address Information */}
      <h2>Address Information</h2>
      <div className="intake-form-row">
        <div className="intake-form-column">
          <label htmlFor="streetNumName">Street Number and Name:</label>
          <input
            type="text"
            id="streetNumName"
            name="streetNumName"
            value={formData.streetNumName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="intake-form-column">
          <label htmlFor="city">City/Town:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="intake-form-column">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>

        <div className="intake-form-column">
          <label htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Contact Information */}
      <h2>Contact Information</h2>
      <div className="intake-form-row">
        <div className="intake-form-column">
          <label htmlFor="phoneNum">Credit Card Holder's Telephone Number:</label>
          <input
            type="tel"
            id="phoneNum"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleChange}
            required
          />
        </div>

        <div className="intake-form-column">
          <label htmlFor="email">Credit Card Holder's Email Addresss:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Credit Card Details */}
      <h2>Contact Information</h2>
      <div className="intake-form-row">
        <div className="intake-form-column">
          <label htmlFor="creditCardNum">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNum"
            name="creditCardNum"
            value={formData.creditCardNum}
            onChange={handleChange}
            required
          />
        </div>

        <div className="intake-form-column">
          <label htmlFor="creditExpiration">Credit Card Expiration Date (mm/yyyy):</label>
          <input
            type="text"
            id="creditExpiration"
            name="creditExpiration"
            value={formData.creditExpiration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="intake-form-column">
          <label htmlFor="cardType">Credit Card Type:</label>
          <select
            id="cardType"
            name="cardType"
            value={formData.cardType}
            onChange={handleChange}
            required
          >
            <option value="">Select Card Type</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="American Express">American Express</option>
            <option value="Discover">Discover</option>
          </select>
        </div>

        <div className="intake-form-column">
          <label htmlFor="paymentAmount">Payment Amount:</label>
          <div className="currency-input">
            <span>$</span>
            <input
              type="text"
              id="paymentAmount"
              name="paymentAmount"
              value={formData.paymentAmount}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default IntakeForm;
