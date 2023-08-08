import "./Resume.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
  const componentRef = useRef();
  return (
    <div className="resume">
      <h3>Resume</h3>

      <div className="container">
                <div>
                    <h1>{FName} {LName}</h1>
                    <h3>Email:- {data.email}</h3>
                    <h3>Mob: +91{data.phone}</h3>
                    <h3>linkedin: https://www.linkedin.com/in/abhijeet-sharma-a53a96153/</h3>
                    <h3>github:- https://github.com/abhijeetsharma20</h3>
                </div>

                <div>
                    <h1>Carrer Objective</h1>
                    <h3>Secure a responsible career opportunity to fully utilize my training and skills, while
                        making a significant contribution to the success of the company.
                    </h3>
                </div>

                <h1>HIGHLIGHTS OF QUALIFICATION</h1>
                <div>

                    <table>
                        <tr>
                            <th>Institute School</th>
                            <th>Examination</th>
                            <th>Percentage</th>
                            <th>year</th>
                        </tr>
                        <tr>
                            <td>Gurukul School,Bhatapara
                            </td>
                            <td>12th</td>
                            <td>76.8%</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Gurukul School,Bhatapara
                            </td>
                            <td>10th</td>
                            <td>76.8%</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Gurukul School,Bhatapara
                            </td>
                            <td>10th</td>
                            <td>76.8%</td>
                            <td>2017</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <h1>TECHNICAL SKILLS</h1>
                    <h3>Skills:- Basic concepts of C, C++, Python, Java, HTML, CSS.</h3>
                    <h3> Data Structures and Algorithms.</h3>
                </div>

                <div>
                    <h1>Experience</h1>
                    <ul>
                        <li>
                        ➢ Taught over 400+ students Python Programming in online platform.
                        </li>
                        <li>➢ Sales Executive(internship) for 2 months in treetor.in .</li>
                    </ul>
                </div>

                <div>
                    <h1>Projects</h1>
                    <ul className="interest">
                    {data.project.companies.map((company, index) => {
                  return (
                    <li key={index} className="regularText">
                     
                     {company}
                    </li>
                  );
                })}
              </ul>
{/* 
                    <li>
                    ➢ Number Guessing game in python.
                    </li>
                    <li>
                    ➢ Calculator using Html,CSS and Javascript.
                    </li> */}
                </div>

                <div>
                    <h1>
                    EXTRACURRICULAR ACTIVITIES:
                    </h1>
                    <ul>
                        <li>
                        Member Of Developer’s Club in college.
                        </li>
                        <li>Interested in Troubleshooting Computer Hardware Problems.</li>
                    </ul>
                </div>

                <div>
                    <h1>
                    Achievements
                    </h1>
                    <ul>
                        <li>
                        ➢ 4 star C++ coder in Hackerrank.
                        </li>
                        <li>
                        ➢ 4 star Java coder in Hackerrank.
                        </li>
                    </ul>
                </div>

                <div>
                    <h1>Languages</h1>
                    <ul>
                        <li>
                        English
                        </li>
                        <li>
                        Hindi
                        </li>
                    </ul>
                </div>

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
        <ReactToPrint
          trigger={() => <button type="button">Print this out!</button>}
          content={() => componentRef.current}
          documentTitle="Resume made by Subid"
        />
      </div>
    </div>
  );
}

export default Resume;
