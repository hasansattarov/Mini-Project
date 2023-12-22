import "./ReviewPage.css";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ReviewPage = () => {
  const location = useLocation();
  const formDataFromIntake = location.state?.formData || {};

  const [formData, setFormData] = useState(formDataFromIntake);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios.post('http://localhost:3000/api/formdata', formData)
        .then(response => {
            console.log('Form data saved successfully');
            setIsEditing(false);
        })
        .catch(error => {
            console.error('Error saving form data:', error);
        });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Review Page</h2>

      {/* Applicant Information */}
      <div>
        <h3>Applicant Information</h3>

        <div>
          <label>Given Name (First Name):</label>
          {isEditing ? (
            <input
              type="text"
              name="applicantGivenName"
              value={formData.applicantGivenName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.applicantGivenName}</span>
          )}
        </div>

        <div>
          <label>Middle Name (if any):</label>
          {isEditing ? (
            <input
              type="text"
              name="applicantMiddleName"
              value={formData.applicantMiddleName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.applicantMiddleName}</span>
          )}
        </div>

        <div>
          <label>Family Name (Last Name):</label>
          {isEditing ? (
            <input
              type="text"
              name="applicantFamilyName"
              value={formData.applicantFamilyName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.applicantFamilyName}</span>
          )}
        </div>
      </div>

      {/* Credit Card Information */}
      <div>
        <h3>Credit Card Information</h3>

        <div>
          <label>Given Name (First Name):</label>
          {isEditing ? (
            <input
              type="text"
              name="creditGivenName"
              value={formData.creditGivenName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.creditGivenName}</span>
          )}
        </div>

        <div>
          <label>Middle Name (if any):</label>
          {isEditing ? (
            <input
              type="text"
              name="creditMiddleName"
              value={formData.creditMiddleName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.creditMiddleName}</span>
          )}
        </div>

        <div>
          <label>Family Name (Last Name):</label>
          {isEditing ? (
            <input
              type="text"
              name="creditFamilyName"
              value={formData.creditFamilyName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.creditFamilyName}</span>
          )}
        </div>
      </div>

      {/* Address Information */}
      <div>
        <h3>Address Information</h3>

        <div>
          <label>Street Number and Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="streetNumName"
              value={formData.streetNumName}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.streetNumName}</span>
          )}
        </div>

        <div>
          <label>City/Town:</label>
          {isEditing ? (
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.city}</span>
          )}
        </div>

        <div>
          <label>State:</label>
          {isEditing ? (
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
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
          ) : (
            <span>{formData.state}</span>
          )}
        </div>

        <div>
          <label>ZIP Code:</label>
          {isEditing ? (
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.zip}</span>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3>Contact Information</h3>

        <div>
          <label>Credit Card Holder's Telephone Number:</label>
          {isEditing ? (
            <input
              type="tel"
              name="phoneNum"
              value={formData.phoneNum}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.phoneNum}</span>
          )}
        </div>

        <div>
          <label>Credit Card Holder's Email Address:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.email}</span>
          )}
        </div>
      </div>

      {/* Credit Card Details */}
      <div>
        <h3>Credit Card Details</h3>

        <div>
          <label>Credit Card Number:</label>
          {isEditing ? (
            <input
              type="text"
              name="creditCardNum"
              value={formData.creditCardNum}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.creditCardNum}</span>
          )}
        </div>

        <div>
          <label>Credit Card Expiration Date (mm/yyyy):</label>
          {isEditing ? (
            <input
              type="text"
              name="creditExpiration"
              value={formData.creditExpiration}
              onChange={handleChange}
            />
          ) : (
            <span>{formData.creditExpiration}</span>
          )}
        </div>

        <div>
          <label>Credit Card Type:</label>
          {isEditing ? (
            <select
              name="cardType"
              value={formData.cardType}
              onChange={handleChange}
            >
              <option value="">Select Card Type</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="American Express">American Express</option>
              <option value="Discover">Discover</option>
            </select>
          ) : (
            <span>{formData.cardType}</span>
          )}
        </div>

        <div>
          <label>Payment Amount:</label>
          {isEditing ? (
            <div className="currency-input">
              <span>$</span>
              <input
                type="text"
                name="paymentAmount"
                value={formData.paymentAmount}
                onChange={handleChange}
              />
            </div>
          ) : (
            <span>{formData.paymentAmount}</span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      {isEditing ? (
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
