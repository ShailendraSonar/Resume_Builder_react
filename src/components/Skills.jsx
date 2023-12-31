import React from "react";

function Skills({ data, step, setData, setStep }) {
  let skillSubmit = (event) => {
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
    <div className="skills container">
      <h2 className="headd" style={{ marginBottom: "1rem" }}>Skills</h2>
      <form id="skills" onSubmit={skillSubmit}>
        <div className="form-group">
          <label htmlFor="skills">Skills you have<span className="start">*</span></label>
          <input
            type="text"
            placeholder="e.g. React.js-90, Angular-70, Node.js-85, MongoDB-60, etc. (separate each skill with a comma)"
            name="skills"
            required
            id="skills"
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

export default Skills;
