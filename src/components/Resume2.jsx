import "./Resume2.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Resume2({ data, step, setStep }) {
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
  let projectLink =  data.ProjectLink;
  let projectDescription = data.ProjectDescription?.split("/,");
  let startYearDes = data.StartYearDes;
  let endDateDes = data.EndDateDes;

  let projectTitle2 = data.ProjectTitle2;
  let projectLink2 =  data.ProjectLink2;
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
  let CompanyNameEx2= data.CompanyNameEx2;
  let PlaceNameEx2 = data.PlaceNameEx2;
  let StartEx2 = data.StartEx2;
  let LeaveEx2= data.LeaveEx2;
  let TaskEx2 = data.TaskEx2;

  

  // let Educ = data.education;
  const componentRef = useRef();
  return (
    <div className="resume container">
      {/* <h3 className="headd" >Template 1</h3> */}
      <div className="">
        <div className="resume-wrapper forPrint" ref={componentRef} >
          <div className="container">

            <div className="header mb-3">
              <h1 className="text-center sectiontitle">{FName} {LName}</h1>
              <div className="rows">
                <div >
                  <a ><i className="fa-solid fa-phone d-inline-block regularText"></i><h6 className="d-inline-block regularText">+91<span>{data.phone}</span></h6></a>
                </div>
                <div className="">
                  {/* <a href="#"><i className="fa-solid fa-envelope d-inline-block regularText"></i>
                    <h6 className="d-inline-block regularText">{data.email}</h6></a> */}
                  <a
                    href={`mailto:${data.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h6 className="d-inline-block regularText">{data.email}</h6>
                  </a>
                </div>
                <div className="">
                  <a h><i className="fa-solid fa-location-dot d-inline-block regularText"></i>
                    <h6 className="d-inline-block regularText">{data.city?.trim()}, {data.country?.trim()}</h6></a>
                </div>
              </div>
              <div className="text-center">
                <a className="regularText"
                  style={{ lineHeight: "1.5" }}
                  href={`https://${data.linkedIn}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.linkedIn}
                </a>
              </div>
            </div>{/* headers */}

            <section>
              <div className="experience">
                <h3 className="allHeading sectonTitle_2">Experience</h3>
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
                {/* {data.experience.companies.map((company, index) => (

                  <div className="box" key={index}>
                    <div className="year-company">
                      <div className="rowEx">
                        <div>
                          <div>
                            <h4 className="sectonTitle_2">{company}</h4>
                            <strong className="sectonTitle_1">{data.experience.positions[index]}</strong>
                            <ul>
                              <li className="regularText ">{data.experience.tasks[index]?.split(",")}</li>
                            </ul>

                          </div>

                        </div>
                        <div>
                          <div>
                            <p className="d-inline-block regularText">{data.experience.yearOfJoining[index]}</p> <span>-</span> <p className="d-inline-block regularText">{data.experience.yearOfLeaving[index]}</p>
                            <p className="regularText">Banglore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}

              </div>
            </section>
            {/* experiences */}
            <section>
              <div className="experience  its project">
                <h3 className="allHeading sectonTitle_2">Projects</h3>
                <div> <hr className='hrr' /></div>
                
                <div className="year-company">
                      <div className="rowEx">
                        <div>
                          <div>
                            <h4 className="sectonTitle_1">{projectTitle}</h4>
                            <ul>
                              <p className="regularText">{ projectDescription}</p>
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
                              <p className="regularText">{ projectDescription2}</p>
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

                {/* {data.project.companies.map((company, index) => (

                  <div className="box" key={index}>
                    <div className="year-company">
                      <div className="rowEx">
                        <div>
                          <div>
                            <h4 className="sectonTitle_1">{data.project.projects[index]}</h4>
                            <ul>
                              <li className="regularText">{data.project.tasks[index].trim().split(",")}</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="d-inline-block regularText">{data.project.yearOfJoining[index]}</p> <span>-</span> <p className="d-inline-block regularText">{data.project.yearOfLeaving[index]}</p>
                            <p className="d-inline-block regularText">banglore</p>
                            <p className="regularText"> {company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}

              </div>
            </section>
            {/* projectss */}

            <section>
              <div className="education">
                <h3 className="allHeading sectonTitle_2">EDUCATION </h3>
                <div> <hr className='hrr' /></div>
                <div className="education ">

                  <div className="rowEx">
                    <div>
                      <div>
                        <h4 className="sectonTitle_1">{educationProgram}</h4>
                        <ul><p className="regularText">{instituteName}</p></ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="regularText">{placeName}</p>
                        <p className="d-inline-block regularText">{startYear}</p> <span>-</span> <p className="d-inline-block regularText">{passYear}</p>
                      </div>
                    </div>
                  </div>
                  {/* 10th  */}

                  <div className="rowEx">
                    <div>
                      <div>
                        <h4 className="sectonTitle_1">{educationProgram12}</h4>
                        <ul><p className="regularText">{instituteName12}</p></ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="regularText">{placeName12}</p>
                        <p className="d-inline-block regularText">{startYear12}</p> <span>-</span> <p className="d-inline-block regularText">{passYear12}</p>
                      </div>
                    </div>
                  </div>
                  {/* 12th  */}


                  <div className="rowEx">
                    <div>
                      <div>
                        <h4 className="sectonTitle_1">{educationProgramC}</h4>
                       <ul> <p className="regularText">{instituteNameC}</p></ul>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="regularText">{placeNameC}</p>
                        <p className="d-inline-block regularText">{startYearC}</p> <span>-</span> <p className="d-inline-block regularText">{passYearC}</p>
                      </div>
                    </div>
                  </div>
                  {/* Collage  */}


                  {/* {data.education.institutes.map((institute, index) => {
                  return (
                    <li key={index}>
                      <div className="rowEx">
                        <div>
                          <div>
                            <h4 className="sectonTitle_1">{institute}aaSFczdff</h4>
                            <p className="regularText">{data.education.studyPrograms[index]}</p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p className="regularText">Champa</p>
                            <p className="d-inline-block regularText">{data.education.yearOfStart[index]}</p> <span>-</span> <p className="d-inline-block regularText">{data.education.yearsOfPassing[index]}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })} */}
                </div>

              </div>
            </section>
            {/* eductions */}




            <section>
              <div className="skills">
                <h3 className="allHeading sectonTitle_2">SKILLS</h3>
                <div> <hr className='hrr' /></div>
                {skills.map((skill, index) => {
                  skill = skill.trim().split("-");
                  console.log(skill);
                  return (
                    <div className="box" key={index}>
                      <div className="rowSkill">
                        <div>
                          <div>
                            <p><strong className="regularText">Skills- </strong><span>:</span></p>
                          </div>
                        </div>
                        <div>
                          <p className="regularText skillOk">{skill[0]}{skill[1]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* slillss */}

            <section>
              <div className="skills">
                <h3 className="allHeading sectonTitle_2">Achievement</h3>
                <div> <hr className='hrr' /></div>
                {/* {achievementDes.map((skill, index) => {
                  skill = skill.trim().split("-");
                  console.log(skill);
                  return ( */}
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
                {/* );
                })} */}
              </div>
            </section>
            {/* achievemnet */}



            <h3 className="allHeading sectonTitle_2">Language</h3>
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

            <h3 className="allHeading sectonTitle_2">Interest</h3>
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
            setStep(step - 2);
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


export default Resume2;

