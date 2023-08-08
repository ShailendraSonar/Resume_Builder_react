import React from 'react'

function Achivement({ data, step, setData, setStep }) {
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
        <div className="achievement container">
          <h2 className='headd' style={{ marginBottom: "1rem" }}>Achievement </h2>
          <form id="skills" onSubmit={achivementSubmit}>
            <div className="form-group">
              <label htmlFor="achievement">Achievement name<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder=" 1st in coding round"
                name="achievementName"
                id="achievementName"
                title="Please enter at least 3 characters"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Achievement description<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder=" top 10"
                name="achievementDes"
                id="achievementDes"
                title="Please enter at least 3 characters"
                
              />
            </div>
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


export default Achivement