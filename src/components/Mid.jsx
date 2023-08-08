import React from "react";
import tempImage from '../assets/tempImage.PNG'
import './Mid.css'

function Midd({ data, step, setData, setStep }) {
  let middSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(step + 1);
  };

  let two = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    console.log(JSONform)
    alert("form submitted");
    setData({ ...data, ...JSONform });
    setStep(step + 2);
  };

  let three = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    console.log(JSONform)
    alert("form submitted");
    setData({ ...data, ...JSONform });
    setStep(step + 3);
  };
  return (

    <>

      <div className="container ">
        <h2 className="headd" style={{ marginBottom: "1rem" }}>Templates Selection</h2>

        <div>
          <div className="row my-5">
            <div className="col-md-6">

              <div className="borToTemp">
                <form action="" onSubmit={three}>
                  <img src={tempImage} alt="" srcset="" className="imgTemp" />
                  <div className="buttons my-5">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      Previous
                    </button>
                    <button type="submit">Tempelate-3</button>
                  </div>
                </form>
              </div>



            </div>

            <div className="col-md-6">
              <div className="borToTemp">
                <form action="" onSubmit={two}>
                  <img src={tempImage} alt="" srcset="" className="imgTemp" />
                  <div className="buttons my-5">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      Previous
                    </button>
                    <button type="submit">Tempelate-2</button>
                  </div>
                </form>
              </div>
            </div>


          </div>
          <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
              {/* <form id="interests" onSubmit={middSubmit}>
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
              </form> */}
            </div>
          </div>
        </div>









      </div>
    </>
  );
}

export default Midd;
