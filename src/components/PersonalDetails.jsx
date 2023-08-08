import "./PersonalDetails.css";
import React, { useState } from "react";

function PersonalDetails({ data, step, setData, setStep }) {
  const [inputVal, setInputVal] = useState("+91");
  const [inputName, setInputName] = useState("");
  let personalDetailSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    // form.set('FName', form.get('FName').toUpperCase());
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    console.log(JSONform)
    alert("form submitted");
    setData({ ...data, ...JSONform });
    setStep(step + 1);
  };

  // const [notClear, setnotClear] = useState(target.value)
  // setnotClear(target.value)
  return (
    <>
      <div>
        <div className="container">
        <h3 className="headd" style={{ textAlign: "center" }} >Personal Details</h3>
      <form id="personalDetails" onSubmit={personalDetailSubmit}>
       
        <div className="form-group">
          <label htmlFor="FName">First name <span className="start">*</span></label>
          <input
            type="text"
            placeholder="Enter your First name..."
            name="FName"
            id="FName"
            required
            value={inputName}
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
            onChange={(e)=>{setInputName(e.target.value);}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="LName">Last name<span className="start">*</span></label>
          <input
            type="text"
            required
            placeholder="Enter your last name..."
            name="LName"
            id="LName"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="applyFor">Applying for</label>
          <input
            type="text"
            placeholder="Enter the position you are applying for..."
            name="applyFor"
            id="applyFor"
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="aboutSelf">About yourself</label>
          <textarea
            type="text"
            placeholder="Enter about yourself..."
            name="aboutSelf"
            id="aboutSelf"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span className="start">*</span></label>
          <input
            type="email"
            required
            placeholder="Enter your email..."
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Please enter a valid email address"
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone<span className="start">*</span></label>
          <div className="phoneNumber">
            <input
              type="text"
              id="country_code"
              name="country_code"
              placeholder="County code"
              value={inputVal}
              pattern="[+][0-9]{2,3}"
              maxLength="4"
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              
            />
            <input
              type="tel"
              placeholder="Enter your phone number..."
              name="phone"
              id="phone"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid phone number"
              
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <span className="label_faded">Please enter city where you live</span>
          <input
            type="text"
            placeholder="Enter your city..."
            name="city"
            id="city"
            title="Please enter a valid city"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <span className="label_faded">
            Please enter Country where you live
          </span>
          <input
            type="text"
            placeholder="Enter your Country..."
            name="country"
            id="country"
            title="Please enter a valid Country"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your Website..."
            name="website"
            id="website"
            title="Please enter a valid website"
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your LinkedIn profile link..."
            name="linkedIn"
            id="linkedIn"
            title="Please enter a valid LinkedIn profile link"
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your GitHub profile link..."
            name="github"
            id="github"
            title="Please enter a valid LinkedIn profile link"
          />
        </div>
        <div className="form-group">
          <label htmlFor="languages">Preferred Languages<span className="start">*</span></label>
          <input
            type="text"
            placeholder="e.g. English-95, Hindi-90, etc (comma separated)"
            name="languages"
            id="languages"
            title="Please enter your languages"
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
