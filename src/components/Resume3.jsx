import "./Resume2.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Resume3.css'

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Resume({ data, step, setStep }) {
  let languages = data.languages?.split(",");
  let interests = data.interests?.split(",");
  let skills = data.skills?.split(",");
  let achievementName = data.achievementName.split(":");
  let achievementDes = data.achievementDes;
  let LName = data.LName?.trim();
  let FName = data.FName?.trim();

  let educationProgram = data.EducationProgram;
  let instituteName = data.InstituteName;
  let placeName = data.PlaceName;
  let startYear = data.StartYear;
  let passYear = data.PassYear;

  let educationProgram12 = data.EducationProgram12;
  let instituteName12 = data.InstituteName12;
  let placeName12 = data.PlaceName12;
  let startYear12 = data.StartYear12;
  let passYear12 = data.PassYear12;

  let educationProgramC = data.EducationProgramC;
  let instituteNameC = data.InstituteNameC;
  let placeNameC = data.PlaceNameC;
  let startYearC = data.StartYearC;
  let passYearC = data.PassYearC;

  let projectTitle = data.ProjectTitle;
  let projectLink = data.ProjectLink;
  let projectDescription = data.ProjectDescription?.split("/,");
  let startYearDes = data.StartYearDes;
  let endDateDes = data.EndDateDes;

  let projectTitle2 = data.ProjectTitle2;
  let projectLink2 = data.ProjectLink2;
  let projectDescription2 = data.ProjectDescription2;
  let startYearDes2 = data.StartYearDes2;
  let endDateDes2 = data.EndDateDes2;

  let Position = data.Position;
  let CompanyNameEx = data.CompanyNameEx;
  let PlaceNameEx = data.PlaceNameEx;
  let StartEx = data.StartEx;
  let LeaveEx = data.LeaveEx;
  let TaskEx = data.TaskEx;

  let Position2 = data.Position2;
  let CompanyNameEx2 = data.CompanyNameEx2;
  let PlaceNameEx2 = data.PlaceNameEx2;
  let StartEx2 = data.StartEx2;
  let LeaveEx2 = data.LeaveEx2;
  let TaskEx2 = data.TaskEx2;



  // let Educ = data.education;
  const componentRef = useRef();
  return (
    <div className="resume container">
      <h3 className="headd" >Template 1</h3>
      <div className="my-5">
        <div className="resume-wrapper forPrint" ref={componentRef} >
          <div className="container resume_3 mt-5">
            <h1 className='text-center'>{FName} {LName}</h1>
            <hr />
            <div className="container">
              <div className='row'>
                <div className="col-md-6">
                  <h3>{data.email}</h3>
                  <h3>{data.linkedIn}</h3>

                </div>
                <div className="col-md-6">
                  <h3>+91{data.phone}</h3>
                  <h3> https://github.com/abhijeetsharma20</h3>
                </div>
              </div>
              <hr />
            </div>

            <div>
              <h1 className="coll">Carrer Objective</h1>
              <h3 className="py-3">Secure a responsible career opportunity to fully utilize my training and skills, while
                making a significant contribution to the success of the company.
              </h3>
            </div>

            <h1 className="coll">HIGHLIGHTS OF QUALIFICATION</h1>
            <div className='center'>

              <table className="my-3 center">
                <tr>
                  <th>Institute School</th>
                  <th>Examination</th>
                  <th> Program</th>
                  <th>loaction</th>
                  <th>year</th>
                </tr>
                <tr>
                  <td>{instituteName}
                  </td>
                  <td>{educationProgram}</td>
                  <td>10th</td>
                  <td>{placeName}</td>
                  <td>{startYear}-{passYear}</td>
                </tr>
                <tr>
                  <td>{instituteName12}
                  </td>
                  <td>{educationProgram12}</td>
                  <td>12th</td>
                  <td>{placeName12}</td>
                  <td>{startYear12}-{passYear12}</td>
                </tr>
                <tr>
                  <td>{instituteNameC}
                  </td>
                  <td>{educationProgramC}</td>
                  <td>Collage</td>
                  <td>{placeNameC}</td>
                  <td>{startYearC}-{passYearC}</td>
                </tr>
              </table>
            </div>

            <section>
              <div className="skills">
                <h1 className="allHeading coll">SKILLS</h1>
                <div> <hr className='hrr' /></div>
                {skills.map((skill, index) => {
                  skill = skill.trim().split("-");
                  console.log(skill);
                  return (
                    <div className="box" key={index}>
                      <div className="rowSkill">
                        <div>
                          <div>
                            <h3>Skills-<span>:</span></h3>
                          </div>
                        </div>
                        <div>
                          <h3 >{skill[0]}{skill[1]}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="experience">
                <h1 className="allHeading  coll">Experience</h1>
                <div> <hr className='hrr' /></div>
                <div className="rowEx">
                  <div>
                    <div>
                      <h4 className="sectonTitle_2">{CompanyNameEx}</h4>
                      <strong className="sectonTitle_1">{Position}</strong>
                      <ul>
                        <li className="regularText ">{TaskEx?.split(",")}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="d-inline-block regularText">{StartEx}</p> <span>-</span> <p className="d-inline-block regularText">{LeaveEx}</p>
                      <p className="regularText">{PlaceNameEx}</p>
                    </div>
                  </div>
                </div>
                <div className="rowEx">
                  <div>
                    <div>
                      <h4 className="sectonTitle_2">{CompanyNameEx2}</h4>
                      <strong className="sectonTitle_1">{Position2}</strong>
                      <ul>
                        <p className="regularText ">{TaskEx2?.split(",")}</p>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="d-inline-block regularText">{StartEx2}</p> <span>-</span> <p className="d-inline-block regularText">{LeaveEx2}</p>
                      <p className="regularText">{PlaceNameEx2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* experiences */}

            <section>
              <div className="experience  its project">
                <h1 className="allHeading  coll">Projects</h1>
                <div> <hr className='hrr' /></div>
                <div className="year-company">
                  <div className="rowEx">
                    <div>
                      <div>
                        <h4 className="sectonTitle_1">{projectTitle}</h4>
                        <ul>
                          <p className="regularText">{projectDescription}</p>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="d-inline-block regularText">{startYearDes}</p> <span>-</span> <p className="d-inline-block regularText">{endDateDes}</p>
                        <p className="d-inline-block regularText"></p>
                        <p className="regularText"> {projectLink}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="year-company">
                  <div className="rowEx">
                    <div>
                      <div>
                        <h4 className="sectonTitle_1">{projectTitle2}</h4>
                        <ul>
                          <p className="regularText">{projectDescription2}</p>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="d-inline-block regularText">{startYearDes2}</p> <span>-</span> <p className="d-inline-block regularText">{endDateDes2}</p>
                        <p className="d-inline-block regularText"></p>
                        <p className="regularText"> {projectLink2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* projectss */}

            <h1 className="allHeading coll">Language</h1>
            <div> <hr className='hrr' /></div>
            <ul className="language ">
              {languages.map((language, index) => {
                language = language.split("-");
                return (
                  <li key={index} className="regularText">
                    <span className="text regularText">{language[0].trim()}</span>
                    <span className="percent skillOk regularText">
                      <div style={{ width: `${language[1]}%` }}></div>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="row">
              <section>
                <div className="skills">
                  <h1 className="allHeading coll">Achievement</h1>
                  <div> <hr className='hrr' /></div>
                  <div className="box" >
                    <div className="rowSkill">
                      <div>
                        <div>
                          <p><strong className="regularText">{achievementName}</strong><span></span></p>
                        </div>
                      </div>
                      <div>
                        <p className="regularText skillOk">{achievementDes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* achievemnet */}
              
            </div>
            <h1 className="allHeading coll">Interest</h1>
              <div> <hr className='hrr' /></div>
              <ul className="interest">
                {interests.map((interest, index) => {
                  return (
                    <li key={index} className="regularText">
                      {interest.trim()}
                    </li>
                  );
                })}
              </ul>

          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          onClick={() => {
            setStep(step - 3);
          }}
        >
          Previous
        </button>
        <ReactToPrint
          trigger={() => <button type="button">Print this out!</button>}
          content={() => componentRef.current}
          documentTitle="Resume made by shail"
        />
      </div>
    </div>
  );
}


export default Resume;

