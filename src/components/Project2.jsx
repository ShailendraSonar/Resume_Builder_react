import React from 'react'

const Project2 = ({ data, step, setData, setStep }) => {

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
        <div className="project2 container">
          <h2 className='headd' style={{ marginBottom: "1rem" }}>PROJECTS</h2>
          <form id="skills" onSubmit={achivementSubmit}>
            <h2>Project-1</h2>
            <div className="form-group">
              <label htmlFor="education2">Project title<span className="start">*</span></label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                required
                name="ProjectTitle"
                id="ProjectTitle"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Link of Project<span className="start">*</span> </label>
              <input
                type="text"
                placeholder="name of your institute"
                name="ProjectLink"
                id="ProjectLink"
                title="name of your institute"
                
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Project Description<span className="start">*</span></label>
              <textarea
                type="text"
                placeholder=" Education place"
                name="ProjectDescription"
                id="ProjectDescription"
                required
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year<span className="start">*</span></label>
              <input
                type="text"
                placeholder="Year of Start"
                required
                name="StartYearDes"
                id="StartYearDes"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">End Date<span className="start">*</span></label>
              <input
                type="text"
                required
                placeholder="Year of End"
                name="EndDateDes"
                id="EndDateDes"
                title="Year of End"
                
              />
            </div>
            {/* Project1  */}

            <h2>Project-2</h2>
            <div className="form-group">
              <label htmlFor="education2">Project title </label>
              <input
                type="text"
                placeholder="CBSE, ICSC"
                name="ProjectTitle2"
                id="ProjectTitle2"
                title="CBSE, ICSC"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Link of Project</label>
              <input
                type="text"
                placeholder="name of your institute"
                name="ProjectLink2"
                id="ProjectLink2"
                title="name of your institute"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Project Description </label>
              <textarea
                type="text"
                placeholder=" Education place"
                name="ProjectDescription2"
                id="ProjectDescription2"
                title="Education place"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">Start Year</label>
              <input
                type="text"
                placeholder="Year of Start"
                name="StartYearDes2"
                id="StartYearDes2"
                title="Year of Start"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="achievement">End Date</label>
              <input
                type="text"
                placeholder="Year of End"
                name="EndDateDes2"
                id="EndDateDes2"
                title="Year of End"
                
              />
            </div>
            {/* Project2 */}

            

            

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

export default Project2