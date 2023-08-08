import React from 'react'

function Education2({ data, step, setData, setStep }) {
    let achivementSubmit = (event) => {
      event.preventDefault();
      let form = new FormData(event.target);
      let JSONform = {};
      for (const key of form.keys()) {
        JSONform[key] = form.get(key);
      }
      console.log(JSONform)
      alert("form submitted");
      setData({ ...data, ...JSONform });
      setStep(step + 1);
    };
    return (
        <div className="Education2 container">
          <h2 className='headd' style={{ marginBottom: "1rem" }}>Education</h2>
          <form id="skills" onSubmit={achivementSubmit}>
            <h2>10th</h2>
            <div className="form-group">
              <label htmlFor="education2">Education Name<span className="start">*</span></label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                name="EducationProgram"
                required
                id="EducationProgram"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Institute Name<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder="name of your institute"
                name="InstituteName"
                id="InstituteName"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Place Name <span className="start">*</span></label>
              <input
                type="text"
                placeholder=" Education place"
                name="PlaceName"
                required
                id="PlaceName"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year<span className="start">*</span></label>
              <input
                type="text"
                placeholder="Year of Start"
                required
                name="StartYear"
                id="StartYear"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Pass Year<span className="start">*</span></label>
              <input
                type="text"
                placeholder="Year of End"
                required
                name="PassYear"
                id="PassYear"
                title="Year of End"
                
              />
            </div>
            {/* 10th  */}

            <h2>12th</h2>
            <div className="form-group">
              <label htmlFor="education2">Education Name </label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                name="EducationProgram12"
                id="EducationProgram12"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Institute Name</label>
              <input
                type="text"
                placeholder="name of your institute"
                name="InstituteName12"
                id="InstituteName12"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Place Name </label>
              <input
                type="text"
                placeholder=" Education place"
                name="PlaceName12"
                id="PlaceName12"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year</label>
              <input
                type="text"
                placeholder="Year of Start"
                name="StartYear12"
                id="StartYear12"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Pass Year</label>
              <input
                type="text"
                placeholder="Year of End"
                name="PassYear12"
                id="PassYear12"
                title="Year of End"
                
              />
            </div>
            {/* 12th  */}

            <h2>Collage</h2>
            <div className="form-group">
              <label htmlFor="education2">Graduation Name </label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                name="EducationProgramC"
                id="EducationProgramC"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Institute Name</label>
              <input
                type="text"
                placeholder="name of your institute"
                name="InstituteNameC"
                id="InstituteNameC"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Place Name </label>
              <input
                type="text"
                placeholder=" Education place"
                name="PlaceNameC"
                id="PlaceNameC"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year</label>
              <input
                type="text"
                placeholder="Year of Start"
                name="StartYearC"
                id="StartYearC"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Pass Year</label>
              <input
                type="text"
                placeholder="Year of End"
                name="PassYearC"
                id="PassYearC"
                title="Year of End"
                
              />
            </div>
            {/* collage  */}

            

            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous
              </button>
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      );
    }


export default Education2