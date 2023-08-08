import React from 'react'

function Experience2({ data, step, setData, setStep }) {
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
          <h2 className='headd' style={{ marginBottom: "1rem" }}>Experience</h2>
          <form id="skills" onSubmit={achivementSubmit}>
            <h2>1st Experience</h2>
            <div className="form-group">
              <label htmlFor="education2">Title/Position<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder="CBSE, ICSC"
                name="Position"
                id="Position"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Company Name<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder="name of your institute"
                name="CompanyNameEx"
                id="CompanyNameEx"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Place Name<span className="start">*</span></label>
              <input
                type="text"
                placeholder=" Education place"
                required
                name="PlaceNameEx"
                id="PlaceNameEx"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year<span className="start">*</span></label>
              <input
                type="text"
                placeholder="Year of Start"
                required
                name="StartEx"
                id="StartEx"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Year of Leaving<span className="start">*</span></label>
              <input
                type="text"
                placeholder="Year of End"
                required
                name="LeaveEx"
                id="LeaveEx"
                title="Year of End"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Achievement/Task<span className="start">*</span></label>
              <textarea
                type="text"
                placeholder="Year of End"
                name="TaskEx"
                id="TaskEx"
                title="Year of End"
                
              />
            </div>
            {/* !st Experience  */}

            <h2>2nd Experience</h2>
            <div className="form-group">
              <label htmlFor="education2">Title/Position</label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                name="Position2"
                id="Position2"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Company Name</label>
              <input
                type="text"
                placeholder="name of your institute"
                name="CompanyNameEx2"
                id="CompanyNameEx2"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Place Name </label>
              <input
                type="text"
                placeholder=" Education place"
                name="PlaceNameEx2"
                id="PlaceNameEx2"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year</label>
              <input
                type="text"
                placeholder="Year of Start"
                name="StartEx2"
                id="StartEx2"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Year of Leaving</label>
              <input
                type="text"
                placeholder="Year of End"
                name="LeaveEx2"
                id="LeaveEx2"
                title="Year of End"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Achievement/Task</label>
              <textarea
                type="text"
                placeholder="Year of End"
                name="TaskEx2"
                id="TaskEx2"
                title="Year of End"
                
              />
            </div>
            {/* 2nd Ex  */}
            

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


export default Experience2